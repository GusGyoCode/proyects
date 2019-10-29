//Dependencies
import React, {Component} from 'react';

//Components
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {

  //Aqui en App en Content en donde se van a ver efectuados los cambios de los Link
  //sin afectar el Header Simpre sera el mismo

  render(){
    const { children } = this.props;
    return(
      <div>
        <Header/>
        <Content body={children}/>
      </div>
    )
  }
}
 
export default App;
