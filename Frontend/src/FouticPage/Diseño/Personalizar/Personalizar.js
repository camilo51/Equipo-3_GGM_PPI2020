import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import imagen2 from '../../img/ncamisa.jpeg';
import './estilos.css';
import { Button, Modal } from 'react-bootstrap';
import { Modal1, Modal2, Modal3 } from '../../Modal/Modal';

class Personalizar extends Component {
  state = {
    background: '#fff',
  };
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  render() {
    return(
      <div className="principal">

        <div className="contenedor">
          <div>
            <h4 className="crea">¡Crea tu propio diseño!</h4>
          </div>
          <div className="editor">
            <div className="colores" >
              <SketchPicker
              color= {this.state.background}
              onChangeComplete={ this.handleChangeComplete }/>
            </div>
            <div className="imagenEscogida">
              <img src={imagen2} className="imgPrueba" />
            </div>
          </div>
          <div>
              <div className="botones-Modal">
                <Modal1 />
                <Modal2 />
                <Modal3 />
              </div>
              <div className="tallas">
              <h4>Tallas</h4>
                <form className="checks">
                <div>
                  <label for="tallaS">S</label>
                  <input type="checkbox" value="1" id="tallaS"/>
                  </div>
                  <div>
                  <label for="tallaM">M</label>
                  <input type="checkbox" value="1" id="tallaM"/>
                  </div>
                  <div>
                  <label for="tallaL">L</label>
                  <input type="checkbox" value="1" id="tallaL"/>
                  </div>
                  <div>
                  <label for="tallaXL">XL</label>
                  <input type="checkbox" value="1" id="tallaXL"/>
                  </div>
                  <div>
                  <label for="tallaXXL">XXL</label>
                  <input type="checkbox" value="1" id="tallaXXL"/>
                  </div>
                </form>
              </div>
              <div className="botones">
                <Button variant="danger">Cancelar</Button> {' '}
                <Button variant="success">Aceptar</Button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Personalizar;
