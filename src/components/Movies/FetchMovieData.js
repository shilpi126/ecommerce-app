import React, { useState } from 'react'
import classes from "./FetchMovieData.module.css"

const FetchMovieData = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchMovieHandler = async () => {
    try{
        setIsLoading(true)
        const response = await fetch("https://swapi.dev/api/films/")
        const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
                return {
                    id:movieData.episode_id,
                    title:movieData.title,
                    openingText:movieData.opening_crawl,
                    releaseDate:movieData.release_date,
                }
            })
            setIsLoading(false)
            setMovies(transformedMovies)
        } catch(err){
            console.log("something went wrong")
        }
        
    }
    
    
return (
    <React.Fragment>
        <section>
            <button className={classes.btn} onClick={fetchMovieHandler}>Fetch Movie</button>
        </section>
            {isLoading ? (<p className={classes.loading}>Loading...</p>) : (
                <ul className={classes.container}>
                {movies.map((item)=>(
                    <li className={classes.list} key={item.id}>
                        <div className={classes.date}>{item.releaseDate}</div>
                        <h1>{item.title}</h1>
                        
                        <div>{item.openingText}</div>
                        <button>BUY TICKETS</button>
                    </li>
                ))}
            </ul>
            )}
        
    </React.Fragment>
    )
}

export default FetchMovieData