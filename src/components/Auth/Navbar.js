import React, { useContext } from 'react'
import classes from "./Register.module.css"
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const handleLogout = () => {
    authCtx.logout()
  }
  return (
    <div className={classes.container}>
    <h1 className={classes.title}>
      <Link >React Auth</Link>
    </h1>
    <ul>
        {!isLoggedIn &&  
        <li>
          <Link>Login</Link>
        </li>}
        {isLoggedIn && <li>
          <Link>Profile</Link>
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