import React, { Component } from 'react';
import './estilos.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpeg';
import Google from '../Recursos/Google';
import Facebook from '../Recursos/Facebook';

class Inicio extends Component {
  state = {
    email: "",
    contraseña: ""
  }
  handleChange = (e) =>{
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }

  fetchData = () => {
    console.log('Entre a la Funcion con '+JSON.stringify(this.state));
    fetch('https://62rgz.sse.codesandbox.io/api/nuevo-usuario', {
      method: 'POST',
      body: JSON.stringify(this.state),
    })
    .then(res => {
       res.json().then(data => {
         console.log(data);
       });
     })
  }

  render() {
    console.log(this.state);
    return(
      <div className="padre">
        <form className="contenidoFormulario" action="/" onSubmit={this.fetchData}>
        <div>
        <img src={logo} className="logoImg"/>
        </div>
        <h3 className="tituloIS">Iniciar Sesion</h3>
          <input type="email" name="email" defaultValue="" placeholder="Usuario o Email" className="barrasDeInformacion" onChange={this.handleChange} />
          <input type="password" name="contraseña" defaultValue="" placeholder="Contraseña" className="barrasDeInformacion" onChange={this.handleChange} />
          <div className="elboton">
          <button type="button" onClick={this.fetchData} className="buttonEnviar">Enviar</button>
          </div>
          <p> O </p>
          <div className="organizar">
          <Google />
          <Facebook />
          </div>
        </form>
      </div>
    );
  }
}

export default Inicio;
