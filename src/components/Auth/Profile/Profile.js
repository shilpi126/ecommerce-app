import React, { useContext, useState } from 'react'
import classes from "./Profile.module.css"
import AuthContext from '../../../store/auth-context'

const Profile = () => {
  const [newPassword, setNewPassword] = useState('')
  const authCtx = useContext(AuthContext);

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB-AonKwyEBsFYQsBZr9Mx3wJQQ6BSw34E',{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:newPassword,
        returnSecureToken:true,

      }),
      headers:{
        'Content-Type': 'application/json' 
      }


    }).then((res)=>{
    if(res.ok){
      console.log(res.json())
    }

    }).catch((err)=>{
      console.log(err)
    })
    
  }

  return (
    <div className={classes.cont}>
      <h1>Your User Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='newpassword'>New Password</label>
        <input
        type='text'
        id='newpassword'
        value={newPassword}

        onChange={handleNewPassword}
        />
      <div>
      <button type='submit'>Change Password</button>
      </div>
      </form>
    </div>
  )
}

export default Profile