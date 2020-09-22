import React, { PureComponent } from 'react';
import Productos from './Productos/ProductosNiñas'
import Slider from './Slider/Sniñas'

class Niñas extends PureComponent {

  render() {
    return (
      <div>
      <Slider />
      <Productos />
      </div>
    );
  }

}

export default Niñas;
