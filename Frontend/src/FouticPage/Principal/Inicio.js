import React, {Component} from 'react';
import Slider from './Slider/Section';
import Productos from './Productos/Contenido';

class Todo extends Component {
  render() {
    return(
      <div>
        <Slider />
        <Productos />
      </div>
    );
  }
}

export default Todo;
