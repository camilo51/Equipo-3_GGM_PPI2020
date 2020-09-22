import React, { PureComponent } from 'react';
import Productos from './Productos/ProductosNiños'
import Slider from './Slider/Sniños'

class Niños extends PureComponent {

  render() {
    return (
      <div>
      <Slider />
      <Productos />
      </div>
    );
  }

}

export default Niños;
