import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
//creating a instance of createcontext

export const useAuthContext= ()=>{
    return useContext(AuthContext);
}
//useAuthContext is a hook that will return the context object.

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
};