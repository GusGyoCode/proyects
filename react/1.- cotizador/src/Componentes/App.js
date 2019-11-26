import React, {Component} from 'react';
import Header from './Header';
import Formulario from './formulario';
import Resumen from "./Resumen";
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component{

    state = {
      resultado: "",
      datos: {}
    }

  cotizarSeguro=(datos)=>{
    const {marca, plan, year} = datos;

    // Agregar una base de 2000
    let resultado = 2000;

    // obtener la diferencia de años
      const diferencia = obtenerDiferenciaAnio(year);
    // por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado ) / 100;
    // Americano 15% asiatico 5%  europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    // el plan del auto, el basico incrementa el valor 20% y cobertura completa un 50%
    let incrementoPlan = obtenerPlan(plan);
    // dependiendo del plan incrementar
    resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
    // crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    };
    // ya tenemos el resultado
    this.setState({
      resultado:resultado,
      datos:datosAuto
    })
  }

  render(){
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguros de Autos"/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen 
          datos={this.state.datos}
          />
          <Resultado
          resultado={this.state.resultado}
          />
        </div>
      </div>
    )
  }
}

export default App;
