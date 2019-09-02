import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  // crear los ref
  ciudadRef = React.createRef();
  paisRef = React.createRef();

  buscarCiudad = (e) =>{
    e.preventDefault();
    // leer los ref y crear el objeto
    const respuesta = {
      ciudad: this.ciudadRef.current.value,
      pais: this.paisRef.current.value
    }
    //enviar por props
    this.props.datosConsulta(respuesta);
    //resetear el formulario (opcional)
  }

  render() { 
    return ( 
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarCiudad}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef}>
                  <option value="" defaultValue>Elige un pais</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">Mexico</option>
                  <option value="PE">Peru</option>
                  <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-2 buscador">
                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..." /> 
              </div>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
Formulario.propTypes = {
  datosConsulta: PropTypes.func.isRequired
}

export default Formulario;