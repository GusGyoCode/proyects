import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component{

  mostarResultado = () =>{
    // obtener los datos de la consulta
    const {name, weather, main} = this.props.resultado;
    if(!name || !weather || !main) return null;
    const Kelvin = 273.15;
    const urlIcono = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const alt = `Clima de ${name}`;
    return(
      <div className="row">
        <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
          <div className="card-panel light-blue align-center">
            <span className="white-text">
              <h2>Resultado Clima de: {name}</h2>
              <p className="temperatura">
                Actual: {(main.temp - Kelvin).toFixed(2)}&deg;C
                <img src={urlIcono} alt={alt}/>
              </p>
              <p>Max. {main.temp_max - Kelvin} &deg;C</p>
              <p>Min. {main.temp_min - Kelvin} &deg;C</p>
            </span>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div className="container">
        {this.mostarResultado()}
      </div>
    ) 
  }
}
Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default Clima;