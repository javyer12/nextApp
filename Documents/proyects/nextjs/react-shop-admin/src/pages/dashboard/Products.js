import { useState, Fragment } from 'react';
import {
    BriefcaseIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import { AiOutlinePlus } from 'react-icons/ai';
import ProductsList from '@components/ProductsList';
import Modal from '@common/Modal';
import FormProducts from '@components/FormProducts';

export default function Products() {
    const [ product, setProducts ] = useState([]);
    const [ open, setOpen ] = useState(false);
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
                            Full-time
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Remote
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            $120k &ndash; $140k
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Closing on January 9, 2020
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
            <div className='max-w-7xl mt-0'>
                <Modal open={open} setOpen={setOpen}>
                    <FormProducts />
                </Modal>
            </div>
            <ProductsList />
        </Fragment>
    )
}