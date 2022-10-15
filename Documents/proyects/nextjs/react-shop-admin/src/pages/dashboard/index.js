import { useState } from 'react';
import useFetch from '@hook/useFetch';
import Paginate from '@common/Paginate';
import endPoints from '@services/api/index';

const people = [
        {
                name: 'Jane Cooper',
                title: 'Regional Paradigm Technician',
                department: 'Optimization',
                role: 'Admin',
                email: 'jane.cooper@example.com',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
];

export default function Dashboard() {
        const [ offsetProducts, setOffsetProducts ] = useState(0);
        const PRODUCTS_LIMIT = 6;

        const products = useFetch(endPoints.products.getProducts(PRODUCTS_LIMIT, offsetProducts),);
        const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;


        // const PRODUCTS_OFFSET = 6;
        // const products = useFetch(endPoints.products.getPorducts(PRODUTS_LIMIT, PRODUCTS_OFFSET));

        return (
                <>
                        <div className="flex flex-col">
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
                                                                                        ID
                                                                                </th>
                                                                                {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                        Edit
                                                                                </th> */}
                                                                                <th scope="col" className="relative px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                        <span className="sr-only">Edit</span>
                                                                                        Edit
                                                                                </th>
                                                                                <th scope="col" className="relative px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                        <span className="sr-only">Edit</span>
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
                                                                                                                <img className="h-10 w-10 rounded-full" src={product.images[ 0 ]} alt="" />
                                                                                                        </div>
                                                                                                        <div className="ml-4">
                                                                                                                <div className="text-sm font-medium text-gray-900">{product.title}</div>
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
                                                                                                <button className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Edit</button>
                                                                                        </td>
                                                                                        <td className="px-6 py-4 whitespace-nowrap      ">
                                                                                                {/* px-6 py-4 whitespace-nowrap text-right text-sm font-medium */}
                                                                                                {/* <a href="#" className="text-red-600 hover:text-red-900">
                                                                                                        Delete
                                                                                                </a> */}
                                                                                                <button className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">Delete</button>
                                                                                        </td>
                                                                                </tr>
                                                                        ))}
                                                                </tbody>
                                                        </table>
                                                </div>
                                                {totalProducts > 0 && <Paginate totalItems={totalProducts} itemsPerPage={PRODUCTS_LIMIT} setOffset={setOffsetProducts} neighbours={3}></Paginate>}
                                        </div>
                                </div>
                        </div>
                </>
        );
}
