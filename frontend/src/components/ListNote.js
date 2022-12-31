import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListNote = ({note}) => {
  return (
    <div>
       <ListGroup as="ul">
            <ListGroup.Item as="li" >
                <Row>
                    <Col>
                        <Link to={`//note/${note.id}`}>
                        {note.title}
                        </Link>
                    </Col>
                    <Col>
                        {note.body_contd}
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default ListNote