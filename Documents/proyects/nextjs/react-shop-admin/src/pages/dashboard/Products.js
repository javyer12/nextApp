import { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import {
    BriefcaseIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';
import endPoints from '@services/api/index';
import Modal from '@common/Modal';
import FormProducts from '@components/FormProducts';
import useAlert from '@hook/useAlert';
import Alert from '@common/Alert';
import { deleteProduct } from '@services/api/product';

export default function Products() {
    const [ products, setProducts ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const { alert, setAlert, toggleAlert } = useAlert();

    const today = new Date();
    const date = {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
        hour: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds(),
    }

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(endPoints.products.allProducts);
            setProducts(response.data)
        }
        try {
            getProducts();
        } catch (err) {
            setAlert({
                actve: true,
                message: `Something went wrong`,
                type: 'error',
                autoClose: true,
            })
        }
    }, [ alert ]);

    const handleDelete = (id) => {
        deleteProduct(id).then(() => {
            setAlert({
                actve: true,
                message: `Product  with id: ${id}, was deleted successfully`,
                type: 'success',
                autoClose: true,
            });
        }).catch(() => {
            setAlert({
                actve: true,
                message: `Product  with id: ${id}, was not  deleted successfully`,
                type: 'success',
                autoClose: true,
            });
        })
    }
    return (
        <Fragment>

            <div className=" max-w-7xl lg:flex lg:items-center lg:justify-between ">
                <div className="min-h-full flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        List of Products
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Open Full-time
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            El Progreso,Yoro/ Honduras
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Price +500 &ndash; 25% off
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {date.month}/{date.day}/{date.year} - {date.hour}:{date.minutes}:{date.seconds}
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    <span className="sm:ml-3">
                        <button
                            type="button"
                            onClick={() => { setOpen(true) }}
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <AiOutlinePlus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Add Product
                        </button>
                    </span>
                </div>

            </div>
            {/* list of products */}
            <div className="flex flex-col mt-5">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Id
                                        </th>
                                        <th scope="col" className="relative px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <span className="sr-only">Edit</span>
                                            Edit
                                        </th>
                                        <th scope="col" className="relative px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <span className="sr-only">Delete</span>
                                            Delete
                                        </th>

                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.map((product) => (
                                        <tr key={`Product-item-${product.id}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={product.images[ 0 ]} alt="P.I" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            <Link href={`/dashboard/details/${product.id}`} >
                                                                {product.title}
                                                            </Link>
                                                        </div>
                                                        {/* <div className="text-sm text-gray-500">{product.description}</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            {/* hacer un modal mostrando la descripcion */}
                                            {/* <td className="px-6 py-4 whitespace-nowrap">
                                                                                                <div className="text-sm text-gray-900">{product.description}</div>
                                                                                                <div className="text-sm text-gray-500">{product.category.id}</div>
                                                                                        </td> */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product.category.name}</div>
                                                <div className="text-sm text-gray-500">{product.category.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">${product.price}</div>
                                                {product.price > 500 ?
                                                    <div className="text-sm text-green-400">25% Discount</div>
                                                    :
                                                    <div className="text-sm text-gray-500">Not Discount</div>
                                                }
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    <Link href={`/dashboard/edit/${product.id}`} >Edit</Link></button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap      ">
                                                {/* px-6 py-4 whitespace-nowrap text-right text-sm font-medium */}
                                                {/* <a href="#" className="text-red-600 hover:text-red-900">
                                                                                                        Delete
                                                                                                </a> */}
                                                <button
                                                    onClick={() => {
                                                        handleDelete(product.id)
                                                    }}
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mt-0 mb-5'>
                <Modal open={open} setOpen={setOpen}>
                    <FormProducts setOpen={setOpen} setAlert={setAlert} />
                </Modal>
            </div>
            <Alert alert={alert} handleClose={toggleAlert} />
        </Fragment>
    )
}