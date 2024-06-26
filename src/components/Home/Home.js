import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import classes from "./Home.module.css"
import listData from './HomeListData'

const Home = () => {
  return (
    <React.Fragment>
        <h1 className={classes.title}>TOURS</h1>
        <ListGroup as="ul" className={classes['ul-list']}>
            {listData.map((item,index) => (
            <ListGroup.Item as="li" key={index+1} className={classes.list}>
                <div >                
                <span className={classes['list-item-first']} >{item.date}</span>
                <span className={classes['list-item' ]}> {item.name}</span>
                <span className={classes['list-item' ]}>{item.location} </span>
                </div>
                <Button>BUY TICKETS</Button>
            </ListGroup.Item>
            ))}


    </ListGroup>
    </React.Fragment>
  )
}

export default Home