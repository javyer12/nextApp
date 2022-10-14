import { useRef, useState } from 'react';
import { useAuth } from '@hook/useAuth';
import { AiFillLock } from 'react-icons/ai';
import { userData } from '@components/Header';
import ModalLoginError from '@common/ModalLoginError';

export default function LoginPage() {

        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const auth = useAuth();
        const [ loading, setLoading ] = useState(false);

        const submitHandler = (e) => {
                e.preventDefault();
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                auth.signIn(email, password).then(() => {
                        console.log("success");
                        alert("Logged in")
                        window.location.reload()
                },
                )
                        .catch(function (error) {
                                if (error.response?.status === 401) {
                                        auth.setError('Username or password is incorrect.');
                                } else if (error.request) {
                                        auth.setError("We're having technical problems");
                                } else {
                                        auth.setError('Something went wrong');
                                }
                                setLoading(false);
                        });
        }
        return (
                <>
                        <div className="min-h-full flex items-center justify-center  scroll py-12 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md w-full space-y-8">
                                        <div>
                                                <img className="mx-auto h-20 w-auto rounded"
                                                        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                        src={userData.imageUrl}
                                                        alt="Workflow" />
                                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                                        </div>
                                        <form className="mt-8 space-y-6" action="#" onSubmit={submitHandler}>
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="rounded-md shadow-sm -space-y-px">
                                                        <div>
                                                                <label htmlFor="email-address" className="sr-only">
                                                                        Email address
                                                                </label>
                                                                <input
                                                                        id="email-address"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        required
                                                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                        placeholder="Email address"
                                                                        ref={emailRef}
                                                                />
                                                        </div>
                                                        <div>
                                                                <label htmlFor="password" className="sr-only">
                                                                        Password
                                                                </label>
                                                                <input
                                                                        id="password"
                                                                        name="password"
                                                                        type="password"
                                                                        autoComplete="current-password"
                                                                        required
                                                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                        placeholder="Password"
                                                                        ref={passwordRef}
                                                                />
                                                        </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                                        Remember me
                                                                </label>
                                                        </div>

                                                        <div className="text-sm">
                                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                        Forgot your password?
                                                                </a>
                                                        </div>
                                                </div>

                                                <div>
                                                        <button
                                                                type="submit"
                                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                                        <AiFillLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                                </span>
                                                                Sign in
                                                        </button>
                                                        {auth.error ?
                                                                <div className="text-left   p-4 mb-4 mt-4 text-sm text-red-800 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                                                        role="alert">
                                                                        {auth.error} &nbsp; &nbsp;
                                                                        <ModalLoginError />
                                                                </div>
                                                                : null
                                                        }
                                                </div>
                                        </form>
                                </div>
                        </div>
                </>
        );
}
