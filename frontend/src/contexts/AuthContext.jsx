import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token_cookie = Cookies.get("token");
        setIsAuthenticated(token_cookie ? true : false);
    },[])

    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    )
}