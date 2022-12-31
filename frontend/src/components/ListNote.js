import React from 'react'
import { ListGroup, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListNote = ({note}) => {
  return (
    <ListGroup>
        <ListGroup.Item>
            <Row>
                <Col>
                    <Link to={`/note/${note.id}`}>
                        {note.title}
                    </Link>
                </Col>
                <Col>
                    {note.body_contd}
                </Col>
            </Row>
        </ListGroup.Item>
    </ListGroup>
  )
}

export default ListNote