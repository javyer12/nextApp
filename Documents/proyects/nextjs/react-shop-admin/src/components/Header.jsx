/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from "@hook/useAuth";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import CheckoutOrder from '@pages/checkout/index';
import carrito from '@styles/img/carrito.png';
import { GrCart } from 'react-icons/gr';
import { BsXCircle } from 'react-icons/bs';
import { TiThMenuOutline } from 'react-icons/ti';

const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: true },
        { name: 'Products', href: '/dashboard/products/', current: false },
        { name: 'Sells', href: '/dashboard/sold', current: false },
];
const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },

];

function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
}

export default function Header() {
        const [ open, setOpen ] = useState(false);
        const auth = useAuth();
        const userData = {
                userName: auth?.user?.name,
                email: auth?.user?.email,
                imageUrl: auth?.user?.avatar
        };
        // const handleOpenOrder = () => {
        //         setOpen(true)
        //         console.log(open)
        // }
        useEffect(() => {
                setOpen(true)
                console.log(open)
        })
        return (
                <Fragment>
                        <CheckoutOrder open={open} setOpen={setOpen} />
                        <Disclosure as="nav" className="bg-gray-800">
                                {({ open }) => (
                                        <>
                                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <div className="flex items-center justify-between h-16">
                                                                <div className="flex items-center">
                                                                        <div className="flex-shrink-0 bg-gray-100 rounded-2xl">
                                                                                <Link href="/"><a><img className="h-8 w-8" src={carrito.src} alt="Workflow" /></a></Link>
                                                                        </div>
                                                                        <div className="hidden md:block">
                                                                                <div className="ml-10 flex items-baseline space-x-4">
                                                                                        {navigation.map((item) => (
                                                                                                <Link href={item.href}>
                                                                                                        <a
                                                                                                                key={item.name}
                                                                                                                href={item.href}
                                                                                                                className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                                                                                                                aria-current={item.current ? 'page' : undefined}
                                                                                                        >
                                                                                                                {item.name}
                                                                                                        </a>
                                                                                                </Link>
                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="hidden md:block">
                                                                        <div className="ml-4 flex items-center md:ml-6">
                                                                                <button
                                                                                        type="button"
                                                                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                                                >
                                                                                        <span className="sr-only">View notifications</span>
                                                                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                                                                </button>
                                                                                {/* car and order link */}
                                                                                <div className="-mr-2 flex p-1 m-5 bg-gray-100 rounded-2xl">
                                                                                        <Menu as="div" className="ml-1 relative">
                                                                                                <div>
                                                                                                        <Menu.Button className="max-w-xs bg-gray-100 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white">
                                                                                                                <span className="sr-only">Open user menu</span>
                                                                                                                <GrCart className='block h-6 w-6 m-1 text-white' />
                                                                                                        </Menu.Button>
                                                                                                </div>
                                                                                                <Transition
                                                                                                        as={Fragment}
                                                                                                        enter="transition ease-out duration-100"
                                                                                                        enterFrom="transform opacity-0 scale-95"
                                                                                                        enterTo="transform opacity-100 scale-100"
                                                                                                        leave="transition ease-in duration-75"
                                                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                                                        leaveTo="transform opacity-0 scale-95"
                                                                                                >
                                                                                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg py-1 bg-white ring-1 focus:outline-none">
                                                                                                                <button
                                                                                                                        // onClick={handleOpenOrder}
                                                                                                                        className="ml-1">Order</button>
                                                                                                        </Menu.Items>
                                                                                                </Transition>
                                                                                        </Menu>
                                                                                        {/* avatar */}
                                                                                        <Menu as="div" className="ml-9 relative">
                                                                                                <div>
                                                                                                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                                                                <span className="sr-only">Open user menu</span>
                                                                                                                {userData.imageUrl === undefined ?
                                                                                                                        <img className="h-8 w-8 rounded-full"
                                                                                                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                                                                                                alt="Workflow" />
                                                                                                                        :
                                                                                                                        <img className="h-8 w-8 rounded-full"
                                                                                                                                src={userData.imageUrl}
                                                                                                                                alt="Workflow" />
                                                                                                                }
                                                                                                        </Menu.Button>
                                                                                                </div>
                                                                                                <Transition
                                                                                                        as={Fragment}
                                                                                                        enter="transition ease-out duration-100"
                                                                                                        enterFrom="transform opacity-0 scale-95"
                                                                                                        enterTo="transform opacity-100 scale-100"
                                                                                                        leave="transition ease-in duration-75"
                                                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                                                        leaveTo="transform opacity-0 scale-95"
                                                                                                >
                                                                                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                                                                {auth?.user != null ?
                                                                                                                        <button onClick={() => {
                                                                                                                                auth.logout();
                                                                                                                        }} className="block px-4 py-2 text-sm text-gray-700">
                                                                                                                                Log out
                                                                                                                        </button>
                                                                                                                        :
                                                                                                                        <Link href='/login'><p className="block px-4 py-2 text-sm text-gray-700">Log in</p></Link>

                                                                                                                }
                                                                                                        </Menu.Items>
                                                                                                </Transition>
                                                                                        </Menu>
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                <div className="-mr-2 flex md:hidden">
                                                                        {/* Mobile menu button */}
                                                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                                <span className="sr-only">Open main menu</span>
                                                                                {open ? <BsXCircle className="block h-6 w-6" aria-hidden="true" /> :

                                                                                        <TiThMenuOutline className="block h-6 w-6" aria-hidden="true" />
                                                                                        // "No icon"
                                                                                }
                                                                        </Disclosure.Button>
                                                                </div>
                                                        </div>
                                                </div>

                                                <Disclosure.Panel className="md:hidden">
                                                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                                {navigation.map((item) => (
                                                                        <Disclosure.Button
                                                                                key={item.name}
                                                                                as="a"
                                                                                href={item.href}
                                                                                className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                                                                                aria-current={item.current ? 'page' : undefined}
                                                                        >
                                                                                {item.name}
                                                                        </Disclosure.Button>
                                                                ))}
                                                        </div>
                                                        <div className="pt-4 pb-3 border-t border-gray-700">
                                                                <div className="flex items-center px-5">
                                                                        <div className="flex-shrink-0">
                                                                                {userData.imageUrl === undefined ?
                                                                                        <img className="h-10 w-10 rounded-full"
                                                                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                                                                alt="Workflow" />
                                                                                        :

                                                                                        <img className="h-10 w-10 rounded-full"
                                                                                                src={userData.imageUrl}
                                                                                                alt="Workflow" />
                                                                                }
                                                                        </div>
                                                                        <div className="ml-3">
                                                                                <div className="text-base font-medium leading-none text-white">{userData.userName}</div>
                                                                                <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
                                                                        </div>
                                                                        <button
                                                                                type="button"
                                                                                className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                                        >
                                                                                <span className="sr-only">View notifications</span>
                                                                                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                                                        </button>
                                                                </div>
                                                                <div className="mt-3 px-2 space-y-1">
                                                                        {userNavigation.map((item) => (
                                                                                <Disclosure.Button key={item.name} as="a" href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                                                                                        {item.name}
                                                                                </Disclosure.Button>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </Disclosure.Panel>
                                        </>
                                )}
                        </Disclosure>
                </Fragment>
        );
}
