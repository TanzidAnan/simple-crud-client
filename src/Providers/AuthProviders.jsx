import { createContext } from "react";


export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

    const

    return (
        <AuthContext.Provider value={ }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;