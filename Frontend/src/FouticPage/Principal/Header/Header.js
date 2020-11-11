import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './estilos.css';
import logo from '../../img/logo.jpeg';
import menu from '../../img/menu.png';
import { Dropdown, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import perfil from '../../img/Usuario/Perfil.png';

class Header extends Component {
  render() {
    return (
      <div className="Head">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Head_Nav">
          <img src={logo} className="logoImg" />
            <Navbar.Brand className="titulo" >
            Foutic
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" ><Nav.Link href="#inicio">Inicio</Nav.Link></Link>
              <NavDropdown title="Diseño" id="collasible-nav-dropdown">
                <Link to="/diseño/subirImagen" className="enlaces"><NavDropdown.Item href="#Diseño/subirImagen">Subir Imagen</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <Link to="/diseño/personalizar" className="enlaces"><NavDropdown.Item href="#Diseño/personalizar">Personalizar</NavDropdown.Item></Link>
              </NavDropdown>
              <NavDropdown title="Catalogos" id="collasible-nav-dropdown">
              <Link to="/catalogos/hombres" className="enlaces"><NavDropdown.Item href="#Catalogos/hobres">Hombres</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/catalogos/mujeres" className="enlaces"><NavDropdown.Item href="#Catalogos/mujeres">Mujeres</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/catalogos/niños" className="enlaces"><NavDropdown.Item href="#Catalogos/niños">Niños</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/catalogos/niñas" className="enlaces"><NavDropdown.Item href="#Catalogos/niñas">Niñas</NavDropdown.Item></Link>
              </NavDropdown>
              <Link to="/iniciarSesion"><Nav.Link href="#iniciarSesion">Iniciar Sesion</Nav.Link></Link>
              <Link to="/registrarse"><Nav.Link href="#registrarse">Registrarse</Nav.Link></Link>
              <Link to="/perfil" className="enlaces activacion"><Nav.Link href="#perfil">Perfil</Nav.Link></Link>
              <Link to="/perfil"><img src={perfil} className="imagenDeUsuario" /></Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
    );
  }
}

export default Header;
