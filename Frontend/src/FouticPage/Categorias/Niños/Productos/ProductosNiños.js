import React, {Component} from 'react';
import './estilos.css';
import productos from '../../../img/ProductosDeNiños/NiñosMap';


class ProductosHombre extends Component {
  render() {
    return(
      <div className="centrar">
      <h2>Productos</h2>
        {productos.map((item) => {
          return(
            <div className="contenedorDeProductos">
              <img src={item.producto} className="productosPrimera" />
              <h3 className="precio">{item.precio}</h3>
              <p className="parrafo">{item.informacion}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductosHombre;
