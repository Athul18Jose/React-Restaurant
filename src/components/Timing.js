import React, {useState} from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Timing({data}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
         <Button className='mb-4' variant="warning" onClick={handleShow}>
        Restaurant Timings
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item><strong>Monday:{data.Monday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Tuesday:{data.Tuesday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Wednesday:{data.Wednesday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Thursday:{data.Thursday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Friday:{data.Friday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Saturday:{data.Saturday}</strong> </ListGroup.Item>
                <ListGroup.Item><strong>Sunday:{data.Sunday}</strong> </ListGroup.Item>

            </ListGroup>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Timing