import React, { useContext } from 'react'
import classes from "./Register.module.css"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()
  const isLoggedIn = authCtx.isLoggedIn;
  const handleLogout = () => {
    authCtx.logout()
    navigate('/register')
  }

  return (
    <div className={classes.container}>
    <h1 className={classes.title}>
      <Link to='/'>React Auth</Link>
    </h1>
    <ul>
        {isLoggedIn &&  
        <li>
          <Link to='/'>User</Link>
        </li>}
        {!isLoggedIn &&  
        <li>
          <Link to='/register'>Login</Link>
        </li>}
       
        {isLoggedIn && <li>
          <Link to='/profile'>Profile</Link>
          </li>}
        {isLoggedIn &&  
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>}
    </ul>
    </div>
  )
}

export default Navbar