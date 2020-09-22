import React, { Component } from 'react';
import Niños from '../../../img/ProductosDeNiños/Niños.png';
import {Carousel} from 'react-bootstrap';

class Slider extends Component {
  render() {
    return(
      <div>
      <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niños}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niños}
    alt="Third slide"
  />

</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Niños}
    alt="Third slide"
  />

</Carousel.Item>
</Carousel>
      </div>
    );
  }
}
 export default Slider;
