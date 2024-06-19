import React from 'react';
import { Container } from 'react-bootstrap';
import Encabezado from './Encabezado';
import Carrusel from './Carrusel';
import Menu from './Menu';
import Tabla from './Tabla';
import Footer from './Footer';
import Dptocordoba from './Dptocordoba';

class Contenedor extends React.Component {
    render() {
      return (
        <Container style={{ marginTop:'2rem' }} >
            <Encabezado titulo='Bienvenidos' descripcion='Este es un ejemplo de una aplicación web con React y Bootstrap' />
            <Carrusel />
            <Menu />
            <Tabla />
            <Dptocordoba />
            <Footer />
        </Container>
      );}
  }

export default Contenedor;