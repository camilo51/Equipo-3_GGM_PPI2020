import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './FouticPage/Principal/Header/Header';
import Inicio from './FouticPage/Principal/Inicio';
import IniciarSeccion from './FouticPage/Seccion/Iniciar/IniciarSeccion';
import Registrarse from './FouticPage/Seccion/Registro/Registrarse';
import Subir_imagen from './FouticPage/Diseño/SubirImagen/SubirImagen';
import Personalizar from './FouticPage/Diseño/Personalizar/Personalizar';
import Hombre from './FouticPage/Categorias/Hombres/ComplementosHombres';
import Mujeres from './FouticPage/Categorias/Mujeres/ComplementosMujeres';
import Niñas from './FouticPage/Categorias/Niñas/ComplementosNiñas';
import Niños from './FouticPage/Categorias/Niños/ComplementosNiños';
import Perfil from './FouticPage/Perfil/Usuario';
import Pagos from './FouticPage/Pagos/Pagos';
import Footer from './FouticPage/Footer/Footer';
import Contacto from './FouticPage/Contacto/Contacto';


export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciar seccion" component={IniciarSeccion} />
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/diseño/subir imagen" component={Subir_imagen} />
        <Route exact path="/diseño/personalizar" component={Personalizar} />
        <Route exact path="/catalogos/hombres" component={Hombre} />
        <Route exact path="/catalogos/mujeres" component={Mujeres} />
        <Route exact path="/catalogos/niñas" component={Niñas} />
        <Route exact path="/catalogos/niños" component={Niños} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/prendas" component={Pagos} />
        <Route exact path="/contactenos" component={Contacto} />
      </Switch>
      <Footer />
    </BrowserRouter>

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
