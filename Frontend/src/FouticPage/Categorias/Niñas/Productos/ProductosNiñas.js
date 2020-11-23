import React, {Component} from 'react';
import './estilos.css';
import { Link } from "react-router-dom";
import productos from '../../../img/ProductosDeNiñas/NiñasMap';


class ProductosHombre extends Component {
  render() {
    return(
      <div className="centrar">
      <h2>Productos</h2>
        {productos.map((item) => {
          return(
            <div className="contenedorDeProductos">
               <Link to="/prendas" className="productos">
              <img src={item.producto} className="productosPrimera" />
              <h3 className="precio">{item.precio}</h3>
              <p className="parrafo">{item.informacion}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductosHombre;
