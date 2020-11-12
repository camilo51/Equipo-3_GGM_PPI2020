import React, {Component} from 'react';
import Primera from '../../img/ProductosPrimeraPagina/PrimerDescuento.png';
import slider1 from '../../img/ProductosPrimeraPagina/slider1.png';
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
      src={Primera}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Primera}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
  }
}
 export default Section;
