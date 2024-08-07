import React from 'react'

const Input = (props) => {
  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input
        className={props.className}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}

        />
    </div>
  )
}

export default Input