import React from 'react'
import classes from "./Register.module.css"
const Navbar = () => {
  return (
    <div className={classes.container}>
    <h1 className={classes.title}>React Auth</h1>
    <ul>
        <li>Login</li>
        <li>Profile</li>
        <li><button>Logout</button></li>
    </ul>
   </div>
  )
}

export default Navbar