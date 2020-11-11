import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import imagen2 from '../../img/ProductosPrimeraPagina/elementos2.png';
import './estilos.css';
import { Button, Modal } from 'react-bootstrap';

class Personalizar extends Component {
  state = {
    background: '#fff',
    show: false
  };
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  handleShow = () => {
    this.setState({show: true });
  };
  handleClose = () => {
    this.setState({show: false });
  };
  render() {
    return(
      <div className="principal">
      <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="contenedor">
          <div>
            <h4>¡Crea tu propio diseño!</h4>
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
              <div>
                <Button as="input" type="button" value="Texturas" onClick={this.handleShow} />{' '}
                <Button as="input" type="button" value="Texto" onClick={this.handleShow} />{' '}
                <Button as="input" type="button" value="Elementos Didacticos" onClick={this.handleShow} />{' '}
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
