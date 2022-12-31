import React, {useState, useEffect } from 'react'
import {Link, useParams}  from 'react-router-dom'
import { Container, Card, Row, Button } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

const IndividualNote = () => {

    const {id} = useParams()

    const[singleNote, setSingleNote] = useState([])

    useEffect(()=>{

        async function fetchNote(){
            const{data} = await axios.get(`/api/note/${id}`)
            setSingleNote(data)
        }
        fetchNote()

    },[id])

    const formattedDate = moment(singleNote.created_time).format('MMMM Do YYYY, h:mm:ss a');


  return (
    <Container>
        <Container as={'div'}>
            <Link to={'/'}>
                <Button variant="outline-secondary">
                    Back 
                </Button>
            </Link>
        </Container>
        <br></br>
        <Container as={'div'}>
            <Card className="text-center">
                <Card.Header>
                    <h4>{singleNote.title}</h4>
                </Card.Header>
                <Card.Body className="text-center">
                        <Row>
                            <h4>{singleNote.body}</h4>
                        </Row>
                        <Row>
                            <p>{formattedDate}</p>
                        </Row>
            
                </Card.Body>
            </Card>      
        </Container>
    </Container>
  )
}

export default IndividualNote