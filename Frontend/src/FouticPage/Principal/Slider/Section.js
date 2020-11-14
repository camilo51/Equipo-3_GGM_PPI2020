import React, {Component} from 'react';
import Primera from '../../img/ProductosPrimeraPagina/PrimerDescuento.png';
import Segunda from '../../img/ProductosPrimeraPagina/SegundoDescuento.png';
import Tercera from '../../img/ProductosPrimeraPagina/TercerDescuento.png';
import {Carousel} from 'react-bootstrap';

class Section extends Component {
  render() {
    return(
      <Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Primera}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Segunda}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Tercera}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
  }
}
 export default Section;
