//Dependencies
import React, { Component } from 'react';

//Assets
import banner1 from "./img/banner1.jpg";
import banner2 from "./img/banner2.jpg";
import banner3 from "./img/banner3.jpg";

class Banner extends Component {
  
  render() { 
    return (
      <div id="carouselExampleControls" className="carousel slide banner" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="info">
              <img className="fondo-info" src={banner1} alt="fondo banner 1"/>
              <div className="contenedor">
                <h2 className="subtitulo">Welcome to Movies App</h2>
                <div className="p-info-contenedor">
                  <p className="p-info">THE LATEST IN MOVIE APPS</p>
                </div>
                <div className="contenedor-info">
                  <h4>THE BEST MOVIES IN ONE PLACE</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
                <div className="contenedor-info">
                  <h4>YOU WILL FIND THE BEST OF THE BEST</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section className="info">
              <img className="fondo-info" src={banner2} alt="fondo banner 2"/>
              <div className="contenedor">
                <h2 className="subtitulo">Welcome to Movies App</h2>
                <div className="p-info-contenedor">
                  <p className="p-info">THE LATEST IN MOVIE APPS</p>
                </div>
                <div className="contenedor-info">
                  <h4>THE BEST MOVIES IN ONE PLACE</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
                <div className="contenedor-info">
                  <h4>YOU WILL FIND THE BEST OF THE BEST</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section className="info">
              <img className="fondo-info" src={banner3} alt="fondo banner 3"/>
              <div className="contenedor">
                <h2 className="subtitulo">Welcome to Movies App</h2>
                <div className="p-info-contenedor">
                  <p className="p-info">THE LATEST IN MOVIE APPS</p>
                </div>
                <div className="contenedor-info">
                  <h4>THE BEST MOVIES IN ONE PLACE</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
                <div className="contenedor-info">
                  <h4>YOU WILL FIND THE BEST OF THE BEST</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio, natus obcaecati deleniti quos reprehenderit. Labore ab cupiditate sapiente nihil nemo ducimus, nesciunt non quae temporibus veniam voluptatem qui nulla.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
 
export default Banner;