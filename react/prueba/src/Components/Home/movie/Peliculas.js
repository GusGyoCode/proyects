//Dependencies
import React, {Component} from 'react';

//Coponents
import Pelicula from './Pelicula';

//Este componente me hace un mapeo(recorre) las peliculas que se muestra en el inicio (componente reutilizable)
class Peliculas extends Component {

  render() {
    return ( 
      <div className="container-movie">
        {this.props.peliculas.map(pelicula => (
          <Pelicula
            key = {pelicula.id}
            pelicula = {pelicula}
          />
        ))}
      </div>
     );
  }
}
 
export default Peliculas;