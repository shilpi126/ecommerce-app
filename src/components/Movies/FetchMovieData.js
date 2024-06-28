import React, { useEffect, useState } from 'react'
import classes from "./FetchMovieData.module.css"

const FetchMovieData = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [retrying, setRetrying] = useState(false);
    const [error, setError] = useState(null)

    const fetchMovieHandler = async () => {
        setError(null)
    try{
        setIsLoading(true)
        const response = await fetch("https://swapi.dev/api/films/")

        if(!response.ok){
            throw new Error('something went wrong, ...Retrying ')
            
        }

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
            if(err){
                setRetrying(true)
                if(retrying){
                setTimeout(()=>{
                    fetchMovieHandler()
                }, 1000)
                }
            }
            
        }
        setIsLoading(false)
    }

let content = <p className={classes.loading}>Found no movies.</p>;

    if(movies.length > 0){
        content =  <ul className={classes.container}>
        {movies.map((item)=>(
            <li className={classes.list} key={item.id}>
                <div className={classes.date}>{item.releaseDate}</div>
                <h1>{item.title}</h1>
                
                <div>{item.openingText}</div>
                <button>BUY TICKETS</button>
            </li>
        ))}
    </ul>
    }

    // if(error){
    //     content = <p className={classes.loading}>{error}</p>
    // }

    
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
       
        <section>
        {retrying ? <button className={classes.btn} onClick={cancleRetryingHandler}>Cancle Retying</button>
         :
            <button className={classes.btn} onClick={fetchMovieHandler}>Fetch Movie</button>
        }
        </section>

     
         
        {content}
        
    </React.Fragment>
    )
}

export default FetchMovieData