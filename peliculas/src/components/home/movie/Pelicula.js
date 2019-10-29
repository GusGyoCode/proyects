//Depenedencies
import React, { Component } from 'react';

//Muestra cada una de las peliculas por separado
class Pelicula extends Component {
  
  //ref para sacar el id de la pelicula seleccionada
  detallePelicula = React.createRef();

  abrir = (e) =>{
  }

  render() { 
    const {poster_path, title, id, overview, release_date} = this.props.pelicula;
    const image = "https://image.tmdb.org/t/p/w500"+poster_path;
    return ( 
      <div className="col-sm-6">
        <div className="card mb-3">
          <div className="row no-gutters shadow">
            <div className="col-md-4">
              <img src={image} className="card-img" alt={title}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-muted">Release date: {release_date}</small></p>
                <p className="card-text texto">{overview}</p>
                <a className="card-text" href="/"><small className="text-muted">More info</small></a>
              </div>
            </div>
          </div>
        </div>
    </div>
     );
  }
}
 
export default Pelicula;
