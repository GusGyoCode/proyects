//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Home from './components/home';
import Page404 from './components/page404';

//Rutas para cada una de las paginas me las pasa al componente App
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;