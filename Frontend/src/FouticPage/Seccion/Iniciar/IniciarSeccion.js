import React, { Component } from 'react';
import './estilos.css';
import logo from '../../img/logo.jpeg';
import Google from '../Recursos/Google';
import Facebook from '../Recursos/Facebook';

class Inicio extends Component {
  render() {
    return(
      <div className="padre">
        <form className="contenidoFormulario">
        <div>
        <img src={logo} className="logoImg"/>
        </div>
        <h3 className="tituloIS">Iniciar Seccion</h3>
          <input type="email" placeholder="Usuario o Email" className="barrasDeInformacion" />
          <input type="password" placeholder="Contraseña" className="barrasDeInformacion" />
          <div className="elboton">
          <input type="submit" value="Enviar" className="buttonEnviar" />
          </div>
          <p> O </p>
          <div className="organizar">
          <Google />
          <Facebook />
          </div>
          <p>Si no tienes una cuenta <a href="Registrarse"> Click aquí para Registrarse</a></p>
        </form>
      </div>
    );
  }
}

export default Inicio;
