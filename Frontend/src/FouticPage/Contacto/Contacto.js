import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './estilos.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>
          ¡Muchas gracias por compartirnos su opinion!
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Link to="/"><Button variant="success">Aceptar</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}

const Contacto = () => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
            <div className="fondoDeContacto">
              <form className="formularionDeInquietud">
              <h2>Contactenos</h2>
              <br/>
                <label>Estas a punto de enviar un email a Foutic@Foutic.com</label>
                <br/>
                <input type="text" placeholder="Nombre" className="inputContacto" /><br/>
                <input type="email" placeholder="Correo Electronico" className="inputContacto" /><br/>
                <textarea placeholder="Escriba su sugerencia o problema"className="textarea" /><br/>
                <Button variant="success" onClick={() => setModalShow(true)}>Enviar</Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </form>
            </div>
          );
}

export default Contacto;
