import React from "react";
import { Row, Col } from "react-bootstrap";

class Menu extends React.Component {
    render() {
      return (
          <Row className="text-center mt-4">
          <Col><div className="p-3 border bg-light">Item 1</div></Col>
          <Col><div className="p-3 border bg-light">Item 2</div></Col>
          <Col><div className="p-3 border bg-light">Item 3</div></Col>
          <Col><div className="p-3 border bg-light">Item 4</div></Col>
        </Row>
      );
    }
  }

export default Menu;