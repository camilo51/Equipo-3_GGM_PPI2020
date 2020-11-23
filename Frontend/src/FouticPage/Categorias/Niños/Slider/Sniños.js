import React, { Component } from 'react';
import Primera from '../../../img/ProductosDeNiños/1.png';
import Segunda from '../../../img/ProductosDeNiños/2.png';
import Tercera from '../../../img/ProductosDeNiños/3.png';
import {Carousel} from 'react-bootstrap';

class Slider extends Component {
  render() {
    return(
      <div>
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
      </div>
    );
  }
}
 export default Slider;
