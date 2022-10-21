import { Fragment } from 'react';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@hook/useAuth';
import { UserSchema } from '@common/Validation';

export default function Register() {
    const auth = useAuth();
    const route = useRouter();
    //inputs info
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const rolRef = useRef(null);
    const imagesRef = useRef(null);
    const countryRef = useRef(null);
    const streetRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const postalRef = useRef(null);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: nameRef.current.value,
                rol: rolRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                avatar: 'https://cdn-e360.s3-sa-east-1.amazonaws.com/avatar-2-3-4-y-5-todo-lo-que-sabemos-del-esperado-regreso-a-pandora-large-yM1fYtKm5i.jpg',
            }
            const validate = await UserSchema.validate(data);
            auth.register(validate).then(() => {
                route.push('/login')
            });
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <Fragment>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Register to ship the order</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={submitHandler}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                ref={nameRef}
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                ref={passwordRef}
                                                type="password"
                                                required
                                                name="password"
                                                id="password"
                                                autoComplete="password"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                ref={emailRef}
                                                type="text"
                                                name="email"
                                                required
                                                id="email"
                                                autoComplete="given-email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="rol" className="block text-sm font-medium text-gray-700">
                                                Rol
                                            </label>
                                            <select
                                                ref={rolRef}
                                                id="rol"
                                                required
                                                name="rol"
                                                autoComplete="rol"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option id='1'>Customer</option>
                                            </select>
                                        </div>



                                        <div className="col-span-6 sm:col-span-4">
                                            <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                                                                ref={imagesRef}
                                                                id="images"
                                                                required
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
                                        {/* </div> */}
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                ref={countryRef}
                                                id="country"
                                                required
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option id='1'>United States</option>
                                                <option id='2'>Canada</option>
                                                <option id='3'>Honduras</option>
                                                <option id='4'>Argentina</option>
                                                <option id='5'>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-3">
                                            <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                ref={streetRef}
                                                type="text"
                                                required
                                                name="street"
                                                id="street"
                                                autoComplete="street"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                ref={cityRef}
                                                type="text"
                                                name="city"
                                                id="city"
                                                required
                                                autoComplete="address-level2"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                ref={stateRef}
                                                type="text"
                                                name="state"
                                                id="state"
                                                required
                                                autoComplete="state"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                ref={postalRef}
                                                type="text"
                                                name="postal"
                                                id="postal"
                                                required
                                                autoComplete="postal"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
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
                </div>
            </div >

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </Fragment >
    )
}