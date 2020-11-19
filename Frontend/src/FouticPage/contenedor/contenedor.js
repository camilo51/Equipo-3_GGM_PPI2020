import React from 'react';
import Header from '../Principal/Header/Header'
import Footer from '../Footer/Footer'

const Contenedor = (props) => {
  return(
    <>
    <Header />
    {props.children}
    <Footer />
    </>
  )
}
export default Contenedor;
