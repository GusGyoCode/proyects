//Dependencies
import React, { Component } from 'react';

class Search extends Component {
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
      <form onSubmit={this.searchMovie}>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
              className="search-input"
              type="text" 
              placeholder="Search for a movie"
              ref={this.nameMovie}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
 
export default Search;