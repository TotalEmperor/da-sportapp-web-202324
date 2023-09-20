"use client"
import React, {createContext, useContext} from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import {redirect, useRouter} from 'next/navigation'

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const UseAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children,}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                setUser(user);
                console.log("Verified")
                // Activate the user's account
            } else if(!user) {
                setUser(null);
                router.push("/")
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{user}}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export const CheckEmailVerification = ({children,}) => {
    const router = useRouter();

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("User:" +user)
            if (!user.emailVerified) {
                router.push("/")
            }
        });

        return () => unsubscribe();
    });

    return (
        <>
            {children}
        </>
    );
};

