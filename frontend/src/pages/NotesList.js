import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import ListNote from '../components/ListNote'
import axios from 'axios'
import { Link } from 'react-router-dom'

const NotesList = () => {

    const [notes, setNotes] = useState([])

    useEffect(()=>{

        async function fetchNotes(){
            const{data} = await axios.get('/api/main')
            setNotes(data)
        }
        fetchNotes()

    },[]) // remove the dependency array during

  return (
    <Container>
        <Card className="text-center">
            <Card.Header>
                <Row>
                    <Col>
                        <h4>&#9782;Notes</h4>
                    </Col>
                    <Col>
                        <h4>Count:{notes.length}</h4> 
                    </Col>  
                    <Col>
                        <Link to={'/note/new'}>
                            <Button variant="outline-success">
                                Create New Note
                            </Button>
                        </Link>
                    </Col> 
                </Row>
            </Card.Header>
            <Card.Body>
                
                    {
                        notes.map((note, index)=>(
                            <ListNote key={index} note={note}/>
                        ))
                    }

            </Card.Body>
        </Card>
    </Container>
  )
}

export default NotesList