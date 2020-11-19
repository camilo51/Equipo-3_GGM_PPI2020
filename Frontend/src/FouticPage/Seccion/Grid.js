import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sesion from './Iniciar/IniciarSesion';
import Registro from './Registro/Registrarse';
import './estilos.css';

const Grid = () => {
  return(
    <>
    <Container>
      <Row>
        <Col className="ISFondo"><Sesion /></Col>
        <Col className="RFondo"><Registro /></Col>
      </Row>
    </Container>

    </>
  )
}

export default Grid;
