//Dependencies
import React, { Component } from 'react';

//Components
import logo from './banner.jpg';

//Formulario que envia la Url de la api a consultar por busqueda
class Formulario extends Component {

  state ={
    search: []
  }

  // refs para los campos del formulario
  nameMovie = React.createRef();

  searchMovie = (e) =>{
    //prevent default
    e.preventDefault();

    //Guardando los datos del formulario
    const search = this.nameMovie.current.value

    //Guardando y modificando la url del Api con los datos del formulario
    let urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=f09c976978949800e677b6523dd16d5e&query="+search;
    //Console.log(urlSearch)

    //Agregando y enviando por props
    this.props.buscarMovie(urlSearch);

    //resetear el formulario (opcional)
    //e.currentTarget.reset();
  }

  render() { 
    return ( 
      <div className="banner1">
        <img src={logo} alt="" className="banner1__img"/>
          <div className="contenedor1">
            <form onSubmit={this.searchMovie}>
              <h2 className="banner1__titulo">You Favorite Movies.</h2>
                <input
                  ref={this.nameMovie}
                  className="banner1__input"
                  type="text"
                  placeholder="Search for a movie"
                />
            </form>
          </div>
        </div>
     );
  }
}
 
export default Formulario;