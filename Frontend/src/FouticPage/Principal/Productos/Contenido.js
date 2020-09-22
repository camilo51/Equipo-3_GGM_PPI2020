import React, {Component} from 'react';
import './estilos.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import imagenes from '../../img/ProductosPrimeraPagina/imagenes';

class Contenido extends Component {
  render() {
    return(
      <div className="centrar">
      <h2>Productos</h2>
        {imagenes.map((item, index) => {
          return(
            <Router>
            <div className="contenedorDeProductos">
            <Link to="/prendas" className="productos">
              <img src={item.url} className="productosPrimera" />
              <h3 className="precio">{item.precio}</h3>
              <p className="parrafo">{item.descripcion}</p>
              </Link>
            </div>
            </Router>

          );
        })}
      </div>
    );
  }
}

export default Contenido;
