import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function ModalLoginError() {
    const [ isOpen, setIsOpen ] = useState(false);
    function closeModal() {
        setIsOpen(false);
    };
    function openModal() {
        setIsOpen(true);
    }

    return (
        <Fragment>
            <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium 
                text-red-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                focus:visible:ring-opacity-75"
            >
                See Details.
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-900"
                        enterFrom="opacity-0 "
                        enterTo="opacity-100 "
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0 "
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className=" inset-0 mt-0 overflow-y-auto ">
                        <div className=" flex min-h-full items-center justify-center  p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-800"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-95"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full   mt-0 max-w-md transform overflow-hidden rounded-md bg-gray-100 p-4 text-left align-middle shadow-md transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-4">
                                        Invalid userName or password, please check and try again.
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Remember that if you enter the wrong password in three (3) consecutive attempts,
                                            your access will be blocked by security measures.
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            We'll Reload the page.
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-900
                                             px-4 py-2 text-sm font-medium text-white  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                                             focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, Thanks!!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    )
}