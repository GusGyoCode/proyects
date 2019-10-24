//Dependencies
import React from 'react';

const Header = (props) => {

  return(
    <div className="Header">
      <div className="container">
        <a href="/" className="title">Movies</a>
        <nav className="nav">
          <ul className="menu">
            <li className="item"><a href="/" className="menu_link">Login</a></li>
            <li className="item"><a href="/" className="menu_link select">Sing Up</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );

}

export default Header;