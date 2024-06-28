import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import classes from "./Home.module.css"
import listData from './HomeListData'
import FetchMovieData from '../Movies/FetchMovieData'

const Home = () => {
  return (
    <React.Fragment>

        <h1 className={classes.title}>TOURS</h1>
        <FetchMovieData/>

    </React.Fragment>
  )
}

export default Home