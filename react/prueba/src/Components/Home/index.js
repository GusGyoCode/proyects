//Dependencies
import React, { Component } from 'react';

//Components
import Movie from './movie';
import Formulario from './movie/Formulario';
import Peliculas from './movie/Peliculas';

class Home extends Component {

  //State para ayudar con el filtrado de busqueda
  state = {
    search: [],
    mostrar: "no",
  }

  //Me carga el ciclo de vida del componente
  componentDidMount(){
    this.mostrar();
    this.buscarMovie();
  }

  //Consulta la Api para la busqueda y me trae la data cargandola en el State
  buscarMovie = urlSearch => {
    fetch(urlSearch)
    .then(busqueda =>{
      return busqueda.json();
    })
    .then(search =>{
      this.setState({
        search: search.results,
        mostrar: "si"
      })    
    })
  }

  //Muestra el componente correcto depenendiendo de si realizo una busqueda o solo se esta
  //cargando la primera data de peliculas
  mostrar = () =>{
    if(this.state.mostrar === "no"){
      return <Movie/>
    } else {
      return <div className="posicion">
      <Peliculas
        peliculas = {this.state.search}
      />
    </div>;
    } 
  }  

  render() { 
    return (
      <div>
        <Formulario 
          buscarMovie={this.buscarMovie}
        />
        {
          this.mostrar()
        }
      </div>
     );
  }
}
 
export default Home;