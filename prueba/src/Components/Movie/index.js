//Dependencies
import React, { Component } from 'react';


//Donde deberia verse el detalle de la pelicula seleccionada

class Movie extends Component {

  state = {
    movie: []
  }
  
  //Ciclo de vida del componente
  componentDidMount() {
    this.PeliculaDetalle();
  }

  PeliculaDetalle = () =>{
    //Aqui deberia de obtener el valor clickeado por el usuario al selecinar para ver el detalle de
    //la pelicula
    const detallePelicula = "475557";
    let url = "https://api.themoviedb.org/3/movie/"+detallePelicula+"?api_key=f09c976978949800e677b6523dd16d5e"
    //Consultando Api
    fetch(url)
      .then(peliculas=>{
        return peliculas.json();
      })
      .then(movie =>{
        //Actualizando el State para enviarlo por props a otro componente
        console.log(movie)
        this.setState({
          movie: movie
        })
      })
    
    
  }

  render() { 
    //Haciendo destruction de la Api
    const {backdrop_path, original_title, tagline, overview, release_date} = this.state.movie;
    const image = "https://image.tmdb.org/t/p/w500"+backdrop_path;
    console.log(backdrop_path);
    return ( 
      <div>
        <div className="banner">
          <img src={image} alt={original_title} className="banner__img"/>
          <div className="contenedor">
              <h2 className="banner__titulo">{original_title}</h2>
              <p className="banner__txt">{tagline}</p>
          </div>
        </div>
        <div className="definicion">
          <div className="contenedor">
            <h2 className="title_definicion">Overview</h2>
            <p className="txt_definicon">{overview}</p>
            <p className="fecha_definicion">Realice: {release_date}</p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Movie;