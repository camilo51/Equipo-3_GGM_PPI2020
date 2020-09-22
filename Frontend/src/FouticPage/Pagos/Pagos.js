import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Accordion, Card} from 'react-bootstrap';
import './estilos.css'

class Pagos extends Component {

  render() {
    return (
      <div className="estoEsTodo">
        <div className="contenedoDePagado">
          <h2>Elija la modalidad de pago</h2>
          <div>
          <Accordion  className="botonesDeCompras">
            <Card>
            <Button variant="primary" size="lg">Pago por transferencia</Button>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <p className="parrafosSinMargenes informacion">Click para mas informacion <span className="triangulo">▼</span></p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><p className="parrafosSinMargenes">Con esta modalidad de pago le daremos un margen de tiempo y un
                expacio en el cual podra confirmar con una foto
                de la transferencia haciendonos saber que si estainteresado en el producto.
                <br /> Le atenderemos lo mas pronto posible</p></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion  className="botonesDeCompras">
            <Card>
            <Button variant="primary" size="lg">Pago por contraentrega</Button>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <p className="parrafosSinMargenes informacion">Click para mas informacion <span className="triangulo">▼</span></p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><p className="parrafosSinMargenes">Con esta modalidad de pago usted podra pagar
                cuando el producto esté en sus manos, con antelacion no tendra que pagar nada
                <br /> Le atenderemos lo mas pronto posible</p></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
            <div className="botonesDeCompras">
            </div>
          </div>
          <div className="formularioParaFecha">
            <form>
              <p>Aqui debera de poner el dia en el que desee que la prenda le sea entregada
              pasado 5 dias despues de realizar la trasferencia (si es que escogio el metodo de pago por trasferencia),
              o despues de realizar el pedido (si es que escogio el metodo depago por contraentrega).</p>
              <input type="date" />
            </form>
          </div>
          <Button variant="success">Enviar</Button>
        </div>
      </div>
    );
  }

}

export default Pagos;
