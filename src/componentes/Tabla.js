import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Tabla extends Component {
    render() {
      return (
      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody></Table>
      )
    }
  }

export default Tabla;