import React, { Component } from 'react';
import './estilos.css';
import { Button } from 'react-bootstrap'

class Contacto extends Component {

  render() {
    return (
      <div className="fondoDeContacto">
        <form className="formularionDeInquietud">
        <h2>Contactenos</h2>
        <br/>
          <label>Estas a punto de enviar un email a Foutic@Foutic.com</label>
          <br/>
          <input placeholder="Nombre" className="inputContacto" /><br/>
          <input placeholder="Correo Electronico" className="inputContacto" /><br/>
          <textarea placeholder="Escriba su sugerencia o problema"className="textarea" /><br/>
          <Button variant="success">Enviar</Button>
        </form>
      </div>
    );
  }

}

export default Contacto;
