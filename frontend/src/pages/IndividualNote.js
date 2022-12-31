import React, {useState, useEffect } from 'react'
import {Link, useParams, useNavigate}  from 'react-router-dom'
import { Container, Card, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

const IndividualNote = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const[singleNote, setSingleNote] = useState([])

    useEffect(()=>{

        async function fetchNote(){
            const{data} = await axios.get(`/api/note/${id}`)
            setSingleNote(data)
        }
        fetchNote()

    },[id])

    const formattedDate = moment(singleNote.created_time).format('MMMM Do YYYY, h:mm:ss a');

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    async function deleteNote(){
        await axios.delete(`/api/note/${id}/delete`,config)
        navigate('/')
    }


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
                    <Row>
                        <Col>
                            <h4>{singleNote.title}</h4>
                        </Col>
                        <Col>
                            <Link to={`/note/${id}/update`}>
                                <Button variant="outline-primary" >
                                    Update
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" onClick={deleteNote}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
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