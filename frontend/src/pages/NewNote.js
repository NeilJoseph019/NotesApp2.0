import React, {useState} from 'react'
import { Container, Card, Form, Row, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const NewNote = () => {

    const[newNote, setNewNote] = useState({})

    const navigate = useNavigate()

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    async function createNote(){
        await axios.post('/api/note/create',{'title':newNote.title,'body':newNote.body},config)
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
                        <Button variant="outline-dark" onClick={createNote}>
                            Done
                        </Button>
                </Card.Header>
                <Card.Body className="text-center">
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                <Form.Control
                                placeholder="Note Title"
                                aria-label="note-title"
                                onChange={(e)=>{ setNewNote({...newNote, title: e.target.value })}}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroup.Text>Body</InputGroup.Text>
                                <Form.Control 
                                as="textarea" 
                                placeholder="Type your note here.." 
                                onChange={(e)=>{ setNewNote({...newNote, body: e.target.value })}}
                                />
                            </InputGroup>
                        </Row>
            
                </Card.Body>
            </Card>      
        </Container>
    </Container>
  )
}

export default NewNote