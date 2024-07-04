import React, { useState } from 'react'
import classes from "./Register.module.css"

import Navbar from './Navbar'
import Input from '../UI/Input'

const Register = () => {
    const [useremail, setUseremail] =useState("")
    const [userpassword, setUserpassword] = useState("")
    const [isLogin, setIsLogin] = useState(false);
    const [isLoding, setIsLoading] =useState(false)

    const switchAuthModeHandler = () => {
        setIsLogin((prev) => !prev)
    }

    const handleEmailChange = (event) => {
        setUseremail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setUserpassword(event.target.value)
    }

    const handleFormSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault()
        if(isLogin){

        }else{
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-AonKwyEBsFYQsBZr9Mx3wJQQ6BSw34E',
            {
            method:'POST',
            body:JSON.stringify({
                email:useremail,
                password:userpassword,
                returnSecureToken:true,
                token:"justcheck1234",
            }),
            headers:{
                'Content-Type':'application/json'
            }
          }
        ).then(res => {
            setIsLoading(false)
            if(res.ok){
                
            }else{
                return res.json().then(data => {
                    const errorMessage = 'Authentication Failed';

                    alert(errorMessage);

                    console.log(data.error.message)
                })
            }
        })
        }

        setUseremail('')
        setUserpassword('')
    }

return (
    <div className={classes.cont}>
    <Navbar/>
    <div className={classes.signup}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleFormSubmit}>
        
        <label htmlFor='email'>Your Email</label>
        <input
        
        id="email"
        
        type="email"
        onChange={handleEmailChange}
        value={useremail}

        />
        <label htmlFor='password'>Your Password</label>
        <input
        
        id="password"
        type="password"
        
        onChange={handlePasswordChange}
        value={userpassword}
        />
        {!isLoding && <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoding && <p>Sending Request...</p>}
        </form>
        <button 
        type='button'
        onClick={switchAuthModeHandler}
        >{isLogin ? 'create new account' : 'Login with existing account'} </button>
   </div>
    </div>

)
}

export default Register