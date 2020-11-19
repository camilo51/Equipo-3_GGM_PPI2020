import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './FouticPage/Principal/Header/Header';
import Inicio from './FouticPage/Principal/Inicio';
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
import Contenedor from './FouticPage/contenedor/contenedor';
import Grid from './FouticPage/Seccion/Grid';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Contenedor>
    <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/diseño/subirImagen" component={Subir_imagen} />
        <Route exact path="/diseño/personalizar" component={Personalizar} />
        <Route exact path="/iniciarYregistro" component={Grid} />
        <Route exact path="/catalogos/hombres" component={Hombre} />
        <Route exact path="/catalogos/mujeres" component={Mujeres} />
        <Route exact path="/catalogos/niñas" component={Niñas} />
        <Route exact path="/catalogos/niños" component={Niños} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/prendas" component={Pagos} />
        <Route exact path="/contactenos" component={Contacto} />
        </Switch>
      </Contenedor>
      </BrowserRouter>
    </div>
  );
}
