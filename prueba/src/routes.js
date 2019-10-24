//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Movie from './Components/Movie';
import Home from './Components/Home';
import Page404 from './Components/Page404';

//Rutas para cada una de las paginas me las pasa al componente App
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/Movie" component={Movie} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;