import React, {Component} from 'react';
import './estilos.css';
import slider1 from '../../img/ProductosPrimeraPagina/slider1.png';
import {Carousel} from 'react-bootstrap';

class Section extends Component {
  render() {
    return(
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderTamaño"
      src={slider1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderTamaño"
      src={slider1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderTamaño"
      src={slider1}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
  }
}
 export default Section;
