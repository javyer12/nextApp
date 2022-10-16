/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Cookie from "js-cookie";
import Link from 'next/link';
import { useAuth } from "@hook/useAuth";
import { Disclosure, Menu, Transition } from '@headlessui/react';

// export const userData = {
//         name: 'Tom Cook',
//         email: 'tom@example.com',
//         imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: true },
        { name: 'Products', href: '/dashboard/products/', current: false },
        { name: 'Sells', href: '#', current: false },
];
const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
}

export default function Header() {
        const auth = useAuth();

        const userData = {
                userName: auth?.user?.name,
                email: auth?.user?.email,
                imageUrl: auth?.user?.avatar
        };

        return (
                <>
                        <Disclosure as="nav" className="bg-gray-800">
                                {({ open }) => (
                                        <>
                                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <div className="flex items-center justify-between h-16">
                                                                <div className="flex items-center">
                                                                        <div className="flex-shrink-0">
                                                                                <Link href="/"><a><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a></Link>
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

                                                                                {/* Profile dropdown */}
                                                                                <Menu as="div" className="ml-3 relative">
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
                                                                                                        {userNavigation.map((item) => (
                                                                                                                <Menu.Item key={item.name}>
                                                                                                                        {({ active }) => (
                                                                                                                                <a href={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                                                                                        {item.name}
                                                                                                                                </a>
                                                                                                                        )}
                                                                                                                </Menu.Item>
                                                                                                        ))}
                                                                                                        {/* <Menu.Item key={userNavigation.name}>
                                                                                                                {({ active }) => (
                                                                                                                        <a href='' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                                                                                Your Profile
                                                                                                                        </a>
                                                                                                                )}
                                                                                                        </Menu.Item>
                                                                                                        <Menu.Item key={userNavigation.name}>
                                                                                                                {({ active }) => (
                                                                                                                        <a href='' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                                                                                Settings
                                                                                                                        </a>
                                                                                                                )}
                                                                                                        </Menu.Item>
                                                                                                        <Menu.Item key={userNavigation.name}>
                                                                                                                {({ active }) => {

                                                                                                                        auth != null ? <a href='' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                                                                                Log out
                                                                                                                        </a>
                                                                                                                                :
                                                                                                                                <a href='' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                                                                                        Log in
                                                                                                                                </a>


                                                                                                                }}
                                                                                                        </Menu.Item> */}
                                                                                                </Menu.Items>
                                                                                        </Transition>
                                                                                </Menu>
                                                                        </div>
                                                                </div>
                                                                <div className="-mr-2 flex md:hidden">
                                                                        {/* Mobile menu button */}
                                                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                                <span className="sr-only">Open main menu</span>
                                                                                {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> :
                                                                                        // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                                                        "No icon"
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
                </>
        );
}
