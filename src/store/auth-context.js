import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext({
    token:'',
    isLoggedIn : false,
    login : (token) => {},
    logout : () => {},
    autologout:() => {},

})



export const AuthContextProvide = (props) => {
    const initialToken = localStorage.getItem('token')
    const navigate = useNavigate()
    const [token, setToken] = useState(initialToken);
    
    const userIsLoggedIn = !!token;

    const loginHandler = (token) =>{
        setToken(token)
        localStorage.setItem('token',token)
    }
    
    const logoutHandler = () => {
        
        setToken('')
        localStorage.removeItem('token')
        
    }

    const autoLogout = () =>{
        setTimeout(()=>{
            setToken('')
            localStorage.removeItem('token')
            navigate('/register')
        },(1000*60*5))
        
    }

const contextValue = {
    token:token,
    isLoggedIn : userIsLoggedIn,
    login: loginHandler,
    logout : logoutHandler,
    autologout:autoLogout
}

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
}


export default AuthContext;