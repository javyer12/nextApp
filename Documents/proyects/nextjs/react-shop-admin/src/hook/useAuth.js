import React, { useState, useContext, createContext } from "react";
import endPoints from '@services/api';
import Cookie from "js-cookie";
import axios from "axios";


const AuthContext = createContext();

export function ProviderAuth({ children }) {
        const auth = useProviderAuth();
        return <AuthContext.Provider value={auth} > {children}</AuthContext.Provider>
};

export const useAuth = () => {
        return useContext(AuthContext)
};

function useProviderAuth() {
        const [ user, setUser ] = useState(null);
        const options = {
                headers: {
                        accept: '*/*',
                        'Content-Type': 'application/json',
                }
        };
        const signIn = async (email, password) => {
                const { data: { access_token } } = await axios.post(endPoints.auth.login, { email, password }, options);
                console.log(access_token);
        };
        return {
                user,
                signIn
        };
};
