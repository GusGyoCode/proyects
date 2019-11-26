import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends Component{
  mostrarResultado=()=>{
    const {marca,year,plan} = this.props.datos
    if(!marca || !year || !plan) return null;
    return(
      <div className="resumen">
        <h2>Resultado de la cotizacion</h2>
        <li>Marca: {primeraMayuscula (marca)}</li>
        <li>Plan: {primeraMayuscula (plan)}</li>
        <li>Año: {primeraMayuscula (year)}</li>
      </div>
    );
  }
  render(){
    return(
      <div>
        {this.mostrarResultado()}
      </div>
    );  
  }
}
export default Resumen;