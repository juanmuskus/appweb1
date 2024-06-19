import React from 'react';
import { Alert } from 'react-bootstrap';

class Encabezado extends React.Component {
    render() {
      return(
      <Alert variant='primary'>
          <Alert.Heading>{this.props.titulo}</Alert.Heading>
          <p>{this.props.descripcion}</p>
      </Alert>
    )}
  }

export default Encabezado;