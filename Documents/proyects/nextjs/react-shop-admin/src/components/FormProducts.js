import { useRef, Fragment, useState } from "react";
import { addProduct, updateProduct } from "@services/api/product";
import { ProductSchema } from "@common/Validation";
import { useRouter } from "next/router";
import useAlert from '@hook/useAlert';
import Alert from '@common/Alert';

export default function FormProduct({ product }) {
    const formRef = useRef(null);
    console.log(formRef);
    const router = useRouter();
    const [ open, setOpen ] = useState(false);
    const { alert, setAlert, toggleAlert } = useAlert();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(formRef.current);
            const data = {
                title: formData.get('title'),
                price: parseInt(formData.get('price')),
                description: formData.get('description'),
                categoryId: parseInt(formData.get('categoryId')),
                // images: [ formData.get('images').name ],
                images: [ "https://www.pngkey.com/png/detail/257-2579394_ecommerce-web-design-company-ecommerce-mac-png.png",
                    "https://w7.pngwing.com/pngs/391/637/png-transparent-vendor-online-marketplace-business-to-business-service-e-commerce-mac-tonight-gadget-electronics-display-advertising-thumbnail.png",
                    "https://www.corebiz.ag/wp-content/uploads/2021/12/Capa_EV_Ecomm_2.png"
                ],
                createdOn: window.Date(),
            }
            const validateProduct = await ProductSchema.validate(data);
            if (product) {
                updateProduct(product.id, validateProduct).then(async () => {
                    setAlert({
                        active: true,
                        message: "Product updated successfully",
                        type: 'success',
                        autoClose: false,
                    });
                    setOpen(true);
                    await router.push('/dashboard/products');
                });
            } else {
                addProduct(validateProduct).then(() => {
                    setAlert({
                        active: true,
                        message: "Product added successfully",
                        type: 'success',
                        autoClose: false,
                    });
                    setOpen(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000)
                })
            }
        } catch (err) {
            setAlert({
                active: true,
                message: `Something went wrong trying to add new product, Please try again!!, ${err.message}`,
                type: 'error',
                autoClose: false,
            });
            setOpen(false);
        }
    };
    return (
        <Fragment>
            <div className='w-full h-full mt-0 mb-5 '>
                {alert.active && (
                    <div className="w-full mt-0 mb-2 relative ">
                        <Alert alert={alert} handleClose={toggleAlert} />
                    </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} >
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-5 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            defaultValue={product?.title}
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="
                                                    mt-1  py-2 px-3 border  bg-white  shadow-sm focus:outline-none  :text-sm
                                                    block w-full flex-1 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Title"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Price
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            defaultValue={product?.price}
                                            type="number"
                                            min={10}
                                            name="price"
                                            id="price"
                                            className="
                                                    mt-1  py-2 px-3 border  bg-white  shadow-sm focus:outline-none  :text-sm
                                                    block w-full flex-1 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Price"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            defaultValue={product?.description}
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="
                                                    form-textarea 
                                                    mt-1  py-2 px-3 border  bg-white  shadow-sm focus:outline-none  :text-sm
                                                    block w-full flex-1 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Description"
                                        />
                                    </div>
                                </div>


                                <div className="col-span-4 sm:col-span-2">
                                    <label
                                        htmlFor="categoryId"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Category
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <select
                                            defaultValue={product?.categoryId}
                                            id="categoryId"
                                            name="categoryId"
                                            autoComplete="category-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="1">Clothes</option>
                                            <option value="2">Electronics</option>
                                            <option value="3">Furniture</option>
                                            <option value="4">Toys</option>
                                            <option value="5">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 ">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="images"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    defaultValue={product?.images}
                                                    id="images"
                                                    name="images"
                                                    type="file"
                                                    className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 mb-4 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment >
    );
}

// <form >
// <div className="w-full  h-full relative mb-20 overflow-hidden">
//     <div className=" px-4 py-5 bg-white sm:p-6">

//         <div className="grid grid-cols-6 gap-6">
//             <div className="col-span-6 sm:col-span-3">
//                 <label
//                     htmlFor="title"
//                     className="block text-sm font-medium text-gray-700"
//                 >
//                     Title
//                 </label>
//                 <input
//                     type="text"
//                     name="title"
//                     id="title"
//                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 />
//             </div>
//             <div className="col-span-6 sm:col-span-3">
//                 <label
//                     htmlFor="price"
//                     className="block text-sm font-medium text-gray-700"
//                 >
//                     Price
//                 </label>
//                 <input
//                     type="number"
//                     name="price"
//                     id="price"
//                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 />
//             </div>
//          
//         </div>
//         {/*  */}
//         <div className=" grid-cols-6 gap-6">
//             <div className="col-span-6">
//                 <label
//                     htmlFor="description"
//                     className="block text-sm font-medium text-gray-700"
//                 >
//                     Description
//                 </label>
//                 <textarea
//                     name="description"
//                     id="description"
//                     autoComplete="description"
//                     rows="3"
//                     className="form-textarea  block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 />
//             </div>
//             <div className="col-span-6">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Cover photo
//                     </label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                         <div className="space-y-1 text-center">
//                             <svg
//                                 className="mx-auto h-12 w-12 text-gray-400"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 viewBox="0 0 48 48"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <div className="flex text-sm text-gray-600">
//                                 <label
//                                     htmlFor="images"
//                                     className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//                                 >
//                                     <span>Upload a file</span>
//                                     <input
//                                         id="images"
//                                         name="images"
//                                         type="file"
//                                         className="sr-only"
//                                     />
//                                 </label>
//                                 <p className="pl-1">or drag and drop</p>
//                             </div>
//                             <p className="text-xs text-gray-500">
//                                 PNG, JPG, GIF up to 10MB
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//         <button
//             type="submit"
//             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//             Save
//         </button>
//     </div>
// </div>
// </form>