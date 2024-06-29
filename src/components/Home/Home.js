import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import classes from "./Home.module.css"
import listData from './HomeListData'
import FetchMovieData from '../Movies/FetchMovieData'

const Home = () => {
  return (
    <div className={classes.home}>

        <h1 className={classes.title}>TOURS</h1>
        <FetchMovieData/>

    </div>
  )
}

export default Home