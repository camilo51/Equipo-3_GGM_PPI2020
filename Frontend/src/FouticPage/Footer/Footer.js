import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './estilos.css';

class Footer extends Component {

  render() {
    let fecha = new Date();
    let año = fecha.getFullYear();
    return (
      <div className="pieDePagina">
        <div className="parteContenido este">
          <div className="compañia">
            <h3>Creada para</h3>
            <p>Institucion: <a href="https://www.iegabrielgarciamarquez.edu.co/#" target="_blank">Click</a></p>
            <p>Politecnico: <a href="https://www.politecnicojic.edu.co/" target="_blank">Click</a></p>
          </div>
          <div>
          <h3>Progreso</h3>
          <p><a href="https://github.com/camilo51/Equipo-3_GGM_PPI2020/wiki" target="_blank">Foutic y sus integrantes</a></p>
          </div>
        </div>
        <div className="parteContenido">
          <h3>Contactetos</h3>
          <p>Puede contactarnos a: foutic@foutic.com <br />O puede contactarnos tambien a nuestro numero: +57 321 753 1415</p>
          <div className="formularioContacto">
            <p>Si tene alguna inquietud, puede llenar el siguiente formulario y contactarnos.</p>
            <Link to="/contactenos"><button type="button">Click para contactarnos</button></Link>
          </div>
        </div>
        <div className="derechos">
          <p>Pagina creada por Cristian Camilo Pereira Florez ©®™ {año} </p>
        </div>
      </div>
    );
  }

}

export default Footer;
