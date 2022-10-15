//Libraries
import React, { useState, useContext, createContext, useCallback, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
//Services
import endPoints from '@services/api';

const AuthContext = createContext();
//provide authorization to the context hook
export function ProviderAuth({ children }) {
        const auth = useProviderAuth();
        return <AuthContext.Provider value={auth} > {children}</AuthContext.Provider>
};

export const useAuth = () => {
        return useContext(AuthContext)
};
// Function to get the user from the API with the token stored in the cookies
function useProviderAuth() {
        const [ user, setUser ] = useState(null);
        const [ error, setError ] = useState(null);
        const options = {
                headers: {
                        accept: '*/*',
                        'Content-Type': 'application/json',
                }
        };

        const fetchCookie = useCallback(async () => {
                try {
                        const token = Cookie.get('token');
                        if (tolen) {
                                axios.defaults.headers.Authorization = `Bearer ${token}`;
                                const { data: user } = await axios.get(endPoints.auth.profile);

                                setUser(user);
                        }
                } catch (err) {
                        setUser(null);
                }
        }, []);

        const signIn = async (email, password) => {
                const { data: { access_token } } = await axios.post(endPoints.auth.login, { email, password }, options);


                if (access_token) {
                        const token = access_token;
                        Cookie.set('token', token, { expires: 55 });

                        axios.defaults.headers.Authorization = `Bearer ${token}`;
                        const { data: users } = await axios.get(endPoints.auth.profile);
                        // const datum = JSON.stringify(users)
                        Cookie.set('users', users);

                        setUser(users);
                }
        };
        useEffect(() => {
                try {
                        fetchCookie();
                } catch (err) {
                        console.log('from useEffect ', err);
                }
        }, [])
        return {
                user,
                signIn,
                error,
                setError,
        };
};
