import {  createContext, useState } from "react";


const AuthContext = createContext({
    token:'',
    isLoggedIn : false,
    login : (token) => {},
    logout : () => {},

})



export const AuthContextProvide = (props) => {
    const [token, setToken] = useState('');
    const userIsLoggedIn = !!token;

    const loginHandler = (token) =>{
        setToken(token)
    }
    
    const logoutHandler = () => {
        setToken('')
    }

const contextValue = {
    token:token,
    isLoggedIn : userIsLoggedIn,
    login: loginHandler,
    logout : logoutHandler,
}

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
}


export default AuthContext;