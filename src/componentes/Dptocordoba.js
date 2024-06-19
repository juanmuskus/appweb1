import React from "react";
import axios from "axios";

class Dptocordoba extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        isLoading: true,
        error: null,
      };
    }

  //Método del ciclo de vida de React que se llama inmediatamente después de que el componente se monta

    componentDidMount() {
      this.InfoDpto();
    }

    InfoDpto = async () => {
        try {
          const response = await axios.get('https://api-colombia.com/api/v1/Department/14');
          this.setState({
            data: response.data,
            isLoading: false,
          });
        } catch (error) {
          this.setState({
            error: error,
            isLoading: false,});
        }};

        render() {
            const { data, isLoading, error } = this.state;

            if (isLoading) return <p>Cargando...</p>;
            if (error) return <p>Error: {error.message}</p>;

            return (
              <div>
                <h1>Departmento de Córdoba</h1>
                {data ? (
                  <>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Nombre:</strong> {data.name}</p>
                    <p><strong>Población:</strong> {data.population}</p>
                    <p><strong>Area:</strong> {data.surface} km²</p>
                    <p><strong>Capital:</strong> {data.cityCapital.name}</p>
            </>
                ) : null}
              </div>
            );
          }
        }

export default Dptocordoba;