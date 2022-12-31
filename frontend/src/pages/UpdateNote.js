import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Card, Button, InputGroup, Form, Row } from 'react-bootstrap'
import axios from 'axios'

const UpdateNote = () => {

    const{id} = useParams()
    const navigate = useNavigate()

    const[updateSingleNote, setUpdateSingleNote] = useState({})

    useEffect(()=>{

        async function fetchNote(){
            const{data} = await axios.get(`/api/note/${id}`)
            setUpdateSingleNote(data)
        }
        fetchNote()

    },[id])


    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    async function updateNote(){
        await axios.put(`/api/note/${id}/update`,updateSingleNote,config)
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
                <Card.Header className="text-end">
                        <Button variant="outline-dark" onClick={updateNote}>
                            Done
                        </Button>
                </Card.Header>
                <Card.Body className="text-center">
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                <Form.Control
                                placeholder={updateSingleNote.title}
                                aria-label="note-title"
                                onChange={(e)=>{ setUpdateSingleNote({...updateSingleNote, title: e.target.value })}}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroup.Text>Body</InputGroup.Text>
                                <Form.Control 
                                as="textarea" 
                                placeholder={updateSingleNote.body}
                                onChange={(e)=>{ setUpdateSingleNote({...updateSingleNote, body: e.target.value })}}
                                />
                            </InputGroup>
                        </Row>
            
                </Card.Body>
            </Card>      
        </Container>
    </Container>
  )
}

export default UpdateNote