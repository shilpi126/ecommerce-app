import React, { useState } from 'react'
import Input from '../UI/Input';
import classes from "./Contact.module.css"
const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo]= useState("")

    const handlePhoneNoChange = (event) =>{
        setPhoneNo(event.target.value)
    }
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value)
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        //console.log(username, phoneNo, email)
        const obj = {
            username,
            email,
            phoneNo,
        }

        addContactToDB(obj)

        setUsername("")
        setEmail("")
        setPhoneNo("")
    }


    const addContactToDB = async (obj) => {
        try{
        const response = await fetch('https://react-rest-f93cb-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json',{
            method:'POST',
            body:JSON.stringify(obj),
            headers: { 
                'Content-type': 'application/json'
            },
        })
        const data = await response.json()
        //console.log(data)

        }catch(err){
            console.log(err)
        }
    }


return (
    <div className={classes.container}>
    <form className={classes.form} onSubmit={handleFormSubmit}>
        <Input
        className={classes.input}
        id="username"
        type="text"
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        />

        <Input
         className={classes.input}
        id="email"
        type="email"
        label="Email :"
        value={email}
        onChange={handleEmailChange}
    
        />
        <Input
         className={classes.input}
        id="phoneNo"
        type="number"
        label="Phone Number"
        value={phoneNo}
        onChange={handlePhoneNoChange}
        />
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default Contact