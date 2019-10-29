//Dependencies
import React, {Component} from 'react';

//Coponents
import Pelicula from './Pelicula';

//Este componente me hace un mapeo(recorre) las peliculas que se muestra en el inicio (componente reutilizable)
class Peliculas extends Component {

  render() {
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-12 suptitle-movie">
            <h2>Popular Movies</h2>
          </div>
        </div>
        <div className="row">
          {this.props.peliculas.map(pelicula => (
            <Pelicula
              key = {pelicula.id}
              pelicula = {pelicula}
            />
          ))}
        </div>
      </div>
     );
  }
}
 
export default Peliculas;