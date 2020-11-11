import React, {Component} from 'react';
import slider1 from '../../img/ProductosPrimeraPagina/slider1.png';
import {Carousel} from 'react-bootstrap';

class Section extends Component {
  render() {
    return(
      <Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
  }
}
 export default Section;
