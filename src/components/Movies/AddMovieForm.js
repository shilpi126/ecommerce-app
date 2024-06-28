import React, { useState } from 'react'
import Input from '../UI/Input'
import classes from "./AddMovieForn.module.css"

const AddMovieForm = () => {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("")
    const [openingText, setOpeningText]= useState("")

    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleDateChange = (event) =>{
        setReleaseDate(event.target.value)
    }
    const handleOpeningtextChange = (event) =>{
        setOpeningText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const NewMovieObj = {
            title,
            releaseDate,
            openingText,
        }

        console.log(NewMovieObj)

    }


  return (
    <React.Fragment>
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <Input
            
            id="title"
            type="text"
            label="Title"
            value={title}
            onChange={handleTitleChange}
            />
            <label>Opening Teaxt</label>
            <textarea
            className={classes.textarea}
            id="openingtext"
            type="text"
            label="Opening Text"
            value={openingText}
            onChange={handleOpeningtextChange}
            rows="4"
            />
            <Input
            
            id="releaseDate"
            type="date"
            label="Release Date"
            value={releaseDate}
            onChange={handleDateChange}
            />
            <button>Add Movie</button>
        </form>
    </React.Fragment>
  )
}

export default AddMovieForm