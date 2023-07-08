import React from "react";
import './Project.css';
import Project1 from '../img/Encriptador.png';
import Project2 from '../img/Mini Alura.png';
import Project3 from '../img/minimercado.jpeg';

function Proyectos () {
     return (
         <div className="project component__space" id="Portfolio">
             <div className="heading">
                <h1 className="heading">Mi Portafolio</h1>
                <p className="heading p__color">Aqui Muestro algunos de mis proyectos realizados.</p>
                <p className="heading p__color">Espero les guste</p>
             </div>

             <div className="container">
                <div className="row">

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project1} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Desarrollo</h5>
                            <h4 className="project__text">Encriptador de Texto</h4>
                            <a href="https://luisholman.github.io/Encriptador-Alura/" target="_blank" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project2} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Desarrollo</h5>
                            <h4 className="project__text">Mini Alura</h4>
                            <a href="https://luisholman.github.io/Flexbox-posicionamiento-en-pantalla/#" target="_blank" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project3} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Desarrollo</h5>
                            <h4 className="project__text">Recetario</h4>
                            <a href="https://luisholman.github.io/web-tienda/" target="_blank" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   


                   

                   <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                     {/*<button className="view__more pointer btn">Ver mas</button> */ }
                   </div>

                </div>
             </div>
         </div>
     )
}

export default Proyectos;