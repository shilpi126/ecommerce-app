import React, { useEffect, useState, useCallback } from 'react'
import classes from "./FetchMovieData.module.css"
import AddMovieForm from './AddMovieForm'

const FetchMovieData = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [retrying, setRetrying] = useState(false);
    const [error, setError] = useState(null)

    const fetchMovieHandler = useCallback(async() => {
        setError(null)
    try{
        setIsLoading(true)
        const response = await fetch("https://react-rest-f93cb-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json")
        
        if(!response.ok){
            throw new Error('something went wrong, ...Retrying ')
            
        }

        const data = await response.json();
        
        const moviesArray = [];
        for (const key in data){
            moviesArray.push({
                id:key,
                title:data[key].title,
                openingText:data[key].openingText,
                releaseDate:data[key].releaseDate
            })
        }
        
            setIsLoading(false)
            setMovies(moviesArray)
        } catch(err){
            // if(err){
            //     setRetrying(true)
            //     if(retrying){
            //     setTimeout(()=>{
            //         fetchMovieHandler()
            //     }, 1000)
            //     }
            // }

            console.log(err)
            
        }
        setIsLoading(false)
    },[])


    const addMovieToDb = async(NewMovieObj) => {
        try{
        const response = await fetch("https://react-rest-f93cb-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",{
        method: 'POST',
        body: JSON.stringify(NewMovieObj),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    setMovies([...movies,NewMovieObj])

    
}catch(err){
    alert(err.message)
    console.log("failed request")
}

}



    useEffect(() => {
        fetchMovieHandler()
        

    },[fetchMovieHandler])

    console.log(movies)

    const handleDeleteMovie = async(event) => {
        const movieId = event.target.id;

       try{
        const res = await fetch(`https://react-rest-f93cb-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movieId}.json`,{
            method:'DELETE',
            headers: { 
                'Content-type': 'application/json'
            } 
        })

        const movieData = document.getElementById(movieId)
        movieData.parentElement.parentElement.remove()
       }catch(err){
          console.log(err)
       }

    }

let content = <p className={classes.loading}>Found no movies.</p>;

    if(movies.length > 0){
        content =  <ul className={classes.container}>
        {movies.map((item,index)=>(
            <li className={classes.list} key={index+1}>
                <div className={classes.date}>{item.releaseDate}</div>
                <h1>{item.title}</h1>
                
                <div>{item.openingText}</div>
               <div>
                <button>BUY TICKETS</button>
                <button id={item.id} onClick={handleDeleteMovie}>Delete</button>
               </div>

            </li>
        ))}
    </ul>
    }

    if(error){
        content = <p className={classes.loading}>{error}</p>
    }

    
    if(isLoading){
        content = <p className={classes.loading}>Loading.....</p>
    }


    if(retrying){
        content = <p className={classes.loading}>...Retrying</p>
    }
        
        
    
    const cancleRetryingHandler = () => {
        setRetrying(false)

    }
    

  
return (
    <React.Fragment>
        <AddMovieForm onAddMovieData={addMovieToDb}/>
        <div className={classes["btn-container"]}>
        {retrying ? <button className={classes.btn} onClick={cancleRetryingHandler}>Cancle Retying</button>
            :
            <button className={classes.btn} onClick={fetchMovieHandler}>Fetch Movie</button>
        }
        </div>
        

       <div className={classes.card}>
       {content}
       </div>
        
    </React.Fragment>
    )
}

export default FetchMovieData