import React, { useState } from 'react'
import Input from '../UI/Input'
import classes from "./AddMovieForn.module.css"

const AddMovieForm = (props) => {
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

    const handleFormSubmit = async (event) => {
        event.preventDefault()

    
        const NewMovieObj = {
            title,
            releaseDate,
            openingText,
        }

        props.onAddMovieData(NewMovieObj)

        setTitle("")
        setReleaseDate("")
        setOpeningText("")


    }


  return (
    <React.Fragment>
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <Input
            className={classes.input}
            id="title"
            type="text"
            label="Title"
            value={title}
            onChange={handleTitleChange}
            />
            <label htmlFor='openingtext'>Opening Teaxt</label>
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
            className={classes.input}
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