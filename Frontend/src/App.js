import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './FouticPage/Principal/Header/Header';
import Inicio from './FouticPage/Principal/Inicio';
import IniciarSeccion from './FouticPage/Seccion/Iniciar/IniciarSeccion';
import Registrarse from './FouticPage/Seccion/Registro/Registrarse';
import Subir_imagen from './FouticPage/Diseño/SubirImagen/SubirImagen';
import Personalizar from './FouticPage/Diseño/Personalizar/Personalizar';
import Hombre from './FouticPage/Categorias/Hombres/Slider/Shombres';
import Mujeres from './FouticPage/Categorias/Mujeres/ComplementosMujeres'
import Niñas from './FouticPage/Categorias/Niñas/ComplementosNiñas'
import Niños from './FouticPage/Categorias/Niños/ComplementosNiños'
import Perfil from './FouticPage/Perfil/Usuario'
import Pagos from './FouticPage/Pagos/Pagos'


export default function App() {
  return (
    <div className="App">

    <Header />

    <Router>
      <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/inicio" exact component={IniciarSeccion} />
      <Route path="/registro" exact component={Registrarse} />
      <Route path="/subir_imagen" exact component={Subir_imagen} />
      <Route path="/personalizar" exact component={Personalizar} />
      <Route path="/hombres" exact component={Hombre} />
      <Route path="/mujeres" exact component={Mujeres} />
      <Route path="/niñas" exact component={Niñas} />
      <Route path="/niños" exact component={Niños} />
      <Route path="/perfil" exact component={Perfil} />
      <Route path="/prendas" exact component={Pagos} />
      </Switch>
    </Router>

    {/*---------------------Parte Principal---------------------
      <Niñas />
      <Primera_pagina />
      <Subir_imagen />
      <Personalizar />
      <Mujeres />
      <Hombre />
      */}
    </div>
  );
}
