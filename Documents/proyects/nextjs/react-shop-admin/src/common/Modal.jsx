import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BsXCircle } from 'react-icons/bs';
import "../../node_modules/tailwindcss/tailwind.css";

export default function Modal({ open, setOpen, children }) {
        const cancelButtonRef = useRef(null);
        return (
                <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="" initialFocus={cancelButtonRef} onClose={setOpen}>
                                <div className="flex   items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
                                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>
                                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                                &#8203;
                                        </span>
                                        <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        >
                                                <div className="relative  inline-block align-bottom bg-white rounded-lg text-left  shadow-xl  sm:my-8 sm:align-middle sm:max-w-full sm:w-full">
                                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                                <BsXCircle className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setOpen(false)} ref={cancelButtonRef} />
                                                        </div>
                                                        <div className=" bg-white  pb-30 mb-20 sm:p-6 sm:pb-4 ">
                                                                <div className="mb-20 sm:flex sm:items-start "
                                                                >
                                                                        {children}
                                                                </div>
                                                        </div>
                                                </div>
                                        </Transition.Child>
                                </div>
                        </Dialog>
                </Transition.Root>
        );
}

