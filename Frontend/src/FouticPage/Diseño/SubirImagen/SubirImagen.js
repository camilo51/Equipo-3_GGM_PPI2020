import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './estilos.css';
import imagen from '../../img/logo.jpeg';

class SubirImagen extends Component {
  render() {
    return (
      <div className="todo">
        <div className="formato">
          <div className="texto">
            <h4>¿Desea encargar esta prenda?</h4>
          </div>
          <div className="formulario">
            <form enctype="multipart/form-data">
              <input type="file" accept="image/png, image/jpeg" />
            </form>
            <div className="cargaImagen">
              <img src={imagen} className="size" />
            </div>
          </div>
          <div className="tallas">
            <h4>Tallas</h4>
            <form className="checks">
              <div>
                <label for="tallaS">S</label>
                <input type="checkbox" value="1" id="tallaS" />
              </div>
              <div>
                <label for="tallaM">M</label>
                <input type="checkbox" value="1" id="tallaM" />
              </div>
              <div>
                <label for="tallaL">L</label>
                <input type="checkbox" value="1" id="tallaL" />
              </div>
              <div>
                <label for="tallaXL">XL</label>
                <input type="checkbox" value="1" id="tallaXL" />
              </div>
              <div>
                <label for="tallaXXL">XXL</label>
                <input type="checkbox" value="1" id="tallaXXL" />
              </div>
            </form>
          </div>
          <div className="botones">
            <Button variant="danger">Cancelar</Button> {' '}
            <Button variant="success">Aceptar</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default SubirImagen;
