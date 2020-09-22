import React, { PureComponent } from 'react';
import Productos from './Productos/ProductosHombres'
import Slider from './Slider/Shombres'

class Hombres extends PureComponent {

  render() {
    return (
      <div>
      <Slider />
      <Productos />
      </div>
    );
  }

}

export default Hombres;
