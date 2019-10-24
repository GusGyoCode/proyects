//Depenedencies
import React, { Component } from 'react';

//Muestra cada una de las peliculas por separado
class Pelicula extends Component {
  
  //ref para sacar el id de la pelicula seleccionada
  detallePelicula = React.createRef();

  abrir = (e) =>{
    //prevent default
    e.preventDefault();

    //Guardando el id para enviarlo
    const detallePelicula = this.detallePelicula.current.value;

    console.log(detallePelicula);

    //Guardando y enviando por props
    //this.props.peliculaDetalle(detallePelicula)
  }

  render() { 
    const {poster_path, title, id} = this.props.pelicula;
    const image = "https://image.tmdb.org/t/p/w500"+poster_path;
    return ( 
          <a href="/movie">
            <img
              ref={this.detallePelicula} 
              className="movie-img" 
              src={image} alt={title} 
              value={id}
              onClick={this.Abrir}
            />
          </a>
     );
  }
}
 
export default Pelicula;
