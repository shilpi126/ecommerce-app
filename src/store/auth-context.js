import axios from "axios";
import {  createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext({
    user:{},
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
    const [user, setUser] = useState({})
    

    const userIsLoggedIn = !!token;

    const getUser = async () => {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB-AonKwyEBsFYQsBZr9Mx3wJQQ6BSw34E';
    
        const res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            idToken: token
        }),
        headers: {
            'Content-Type': 'application/json'
        },

        }).then(async (res) => {
        const data = await res.json();
        //console.log(data.users)
        setUser(...data.users)
        console.log(user)
        }).catch((err)=>{
            console.log(err)
    })
    }


    useEffect(()=>{
        getUser()
    },[])

    //console.log(user.email)
    

    const loginHandler = (token) =>{
        setToken(token)
        localStorage.setItem('token',token)
    }
    
    const logoutHandler = () => {
        
        setToken('')
        localStorage.removeItem('token')
        navigate('/register')
    }

    const autoLogout = () =>{
        setTimeout(()=>{
            setToken('')
            localStorage.removeItem('token')
            navigate('/register')
        },(1000*60*5))
        
    }


const contextValue = {
    user,
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