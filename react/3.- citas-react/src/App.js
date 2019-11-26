import React from 'react';
import Header from './Componentes/Header';
import AgregarCitas from './Componentes/AgregarCitas';
import ListaCitas from './Componentes/ListaCitas';

class App extends React.Component{
  
  state = {
    citas : []
  }

  componentDidMount(){
    //esta listo
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS) // con parse transformo un string a un arreglo
      })
    }
  }
  componentDidUpdate(){
    //algo cambio
    localStorage.setItem( // con esto cargo al localstorage
      'citas',
      JSON.stringify(this.state.citas) //con stringify convierto un arreglo a una cadena de texto
    )
  }

  crearCita = (nuevaCita) =>{
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    })
  }

  borrarCita = id =>{
    console.log(id);
    //Obtener copia del state
    const citasActuales = [...this.state.citas];
    //borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    //Actualizar el state
    this.setState({
      citas
    })
  }

  render(){
    return (
      <div className="container">
        <Header
          titulo="Administrador de pacientes veterinaria"
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCitas
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
            citas={this.state.citas}
            borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
