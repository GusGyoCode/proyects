//Dependencies
import React, { Component } from 'react';

//Components
import Peliculas from './Peliculas';


class Movie extends Component {

  state = {
    peliculas: []
  }

  //Me carga el ciclo de Vida del componente
  componentDidMount(){
    this.consultarPeliculas();
  }

  //Consulta la Api para cargar las peliculas que se mostraran en el inicio
  consultarPeliculas = () => {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=f09c976978949800e677b6523dd16d5e";
    fetch(url)
      .then(respuesta =>{
        return respuesta.json();
      })
      .then(peliculas =>{
        //Actualizando el State para enviarlo por props a otro componente
        this.setState({
          peliculas: peliculas.results
        })
      })
  }

  render() { 
    return (
        <Peliculas
          peliculas = {this.state.peliculas /*Enviando el state por props*/}
        />
    );
  }
}
 
export default Movie;