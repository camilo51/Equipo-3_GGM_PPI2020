import React, { Component, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export const Modal1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Texturas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button as="input" type="button" value="Texturas" onClick={handleShow} />{' '}
      </div>
    );
}

export const Modal2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Texto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Lo que esciba aquí se vera en la prenda.
          <form>
            <input type="text" placeholder="Texto" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button as="input" type="button" value="Texto" onClick={handleShow} />{' '}
      </div>
    );
}
export const Modal3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Elemento Didactico</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button as="input" type="button" value="Elementos Didacticos" onClick={handleShow} />{' '}
      </div>
    );
}
