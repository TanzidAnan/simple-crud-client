import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true);

    const creatUers =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo ={
        user,
        loading,
        creatUers,
        signInUser
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;