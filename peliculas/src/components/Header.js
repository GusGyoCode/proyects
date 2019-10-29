//Dependencies
import React from 'react';

//Assets
import logo from './logo.svg';

const Header = (props) => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu">
      <a className="navbar-brand logo" href="/">
        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="logo"/>
        MOVIES
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav text-center">
          <a className="nav-item nav-link active" href="/">Login</a>
          <a className="nav-item nav-link active selec" href="/">Sing Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;