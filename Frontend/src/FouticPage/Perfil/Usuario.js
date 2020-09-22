import React, { Component } from 'react';
import Perfil from '../img/Usuario/Perfil.png';
import pedidos from '../img/Usuario/Usuario'
import './estilos.css'

class Usuario extends Component {

  render() {
    return (
      <div>
        <div className="todoPerfil">
          <div className="principalPerfil">
            <h2>Mi Perfil</h2>
            <img src={Perfil} className="imagenDePerfil" />
            <h5>August10023</h5>
          </div>
          <div className="pedidos">
          <h4>ULTIMOS PEDIDOS</h4>
            <div className="centrar">
            <h2>Productos</h2>
              {pedidos.map((item) => {
                return(
                  <div className="contenedorDeProductos">
                    <img src={item.producto} className="productosPrimera" />
                    <h3 className="precio">{item.precio}</h3>
                    <p className="parrafo">{item.informacion}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Usuario;
