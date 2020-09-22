import React, { PureComponent } from 'react';
import Productos from './Productos/ProductosMujeres'
import Slider from './Slider/Smujeres'

class Mujeres extends PureComponent {

  render() {
    return (
      <div>
      <Slider />
      <Productos />
      </div>
    );
  }

}

export default Mujeres;
