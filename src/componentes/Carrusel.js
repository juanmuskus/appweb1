import React from "react";
import { Carousel } from "react-bootstrap";

class Carrusel extends React.Component {
    render() {
      return (
          <Carousel>
          <Carousel.Item>
          <img
                  className="d-block w-100"
                  src="925.jpg"
                  alt="1er Imagen"
          />
            <Carousel.Caption>
              <h3>Playa 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
                  className="d-block w-100"
                  src="4680.jpg"
                  alt="2da Imagen"
          />
            <Carousel.Caption>
              <h3>Playa 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
                  className="d-block w-100"
                  src="6800.jpg"
                  alt="3ra Imagen"
          />
            <Carousel.Caption>
              <h3>Playa 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export default Carrusel;