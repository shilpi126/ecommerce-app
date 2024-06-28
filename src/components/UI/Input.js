import React from 'react'
import classes from "./Input.module.css"
const Input = (props) => {
  return (
    <div>
        <label>{props.label}</label>
        <input
        className={classes.input}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}

        />
    </div>
  )
}

export default Input