import React, { Component } from 'react';
import './estilos.css';
import logo from '../../img/logo.jpeg';
import Google from '../Recursos/Google';
import Facebook from '../Recursos/Facebook';

class Registrarse extends Component {
 
  state = {
    name: ".",
    lastName: ".",
    userName: ".",
    email: ".",
    password: ".",
    birthdate: ".",
    address: ".",
    phone: ".",
    gender: "."
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  fetchData = () => {
    console.log('Entre a la Funcion con ' + JSON.stringify(this.state));
    fetch('http://localhost:3001/api/nuevo-usuario', {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(this.state),
    })
      .then(res => {res.json()
        .then(data => {
          console.log(data);
        });
      })
      .catch(err => { console.log(err) })
}
  render() {
    console.log(this.state);
    return (
      <div className="contenedorPadre">
        <form className="contenedorDelFormulario" onSubmit={this.fetchData}>
          <div className="contenedorDeLaImagen">
            <img src={logo} className="logoImg" />
          </div>
          <h3 className="tituloIS">Registrarse</h3>
          <div>
            <label className="infoLabel">Nombre</label>
            <input type="text" name="name" defaultValue="" placeholder="Nombre" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Apellidos</label>
            <input type="text" name="lastName" defaultValue="" placeholder="Apellidos" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Nombre de Usuario</label>
            <input type="text" name="userName" defaultValue="" placeholder="Usuario" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Email</label>
            <input type="email" name="email" defaultValue="" placeholder="Email" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Contraseña</label>
            <input type="password" name="password" defaultValue="" placeholder="Contraseña" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Telefono movil</label>
            <input type="tel" name="phone" defaultValue="" placeholder="Telefono" className="infoInput" onChange={this.handleChange} />
            <label className="infoLabel">Direccion</label>
            <input type="text" name="address" defaultValue="" placeholder="Cl.__ # __ - __ " className="infoInput" onChange={this.handleChange} />
          </div>
          <div className="contMayor">
            <div className="cont">
              <label className="labelMalo">Genero </label>
              <select size="1" name="gender" defaultValue="" onChange={this.handleChange} className="tamaño">
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="cont">
              <label className="labelMalo">Fecha de nacimiento</label>
              <input type="date" name="birthdate" defaultValue="" className="tamaño" onChange={this.handleChange} />
            </div>
          </div>
          <div className="elboton">
            <button type="button" onClick={this.fetchData} className="buttonEnviar">Enviar</button>
          </div>
          <p className="letraO"> O </p>
          <div className="organizar">
            <Google />
            <Facebook />
          </div>
        </form>
      </div>
    );
  }
}

export default Registrarse;
