import React, { Component } from 'react';
import Niñas from '../../../img/ProductosDeNiñas/Niñas.png';
import {Carousel} from 'react-bootstrap';

class Slider extends Component {
  render() {
    return(
      <div>
      <Carousel className="Carousel">
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niñas}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niñas}
    alt="Third slide"
  />

</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niñas}
    alt="Third slide"
  />

</Carousel.Item>
</Carousel>
      </div>
    );
  }
}
 export default Slider;
