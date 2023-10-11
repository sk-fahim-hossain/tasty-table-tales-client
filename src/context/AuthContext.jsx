import { createContext } from "react";


export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    const authInfo = {
        name :'fahim'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;