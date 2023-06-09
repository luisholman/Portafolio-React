import React from "react";
import './Project.css';
import Project1 from '../img/portfolio-1.jpg';
import Project2 from '../img/portfolio-2.jpg';
import Project3 from '../img/portfolio-3.jpg';
import Project4 from '../img/portfolio-4.jpg';

function Proyectos () {
     return (
         <div className="project component__space" id="Portfolio">
             <div className="heading">
                <h1 className="heading">Proyectos</h1>
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
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
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
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
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
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project4} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
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
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project4} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Development</h5>
                            <h4 className="project__text">Getting tickets to the big show</h4>
                            <a href="Project" className="project__btn">Ver detalles</a>
                        </div>
                    </div>
                   </div>

                   <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                     <button className="view__more pointer btn">Ver mas</button>
                   </div>

                </div>
             </div>
         </div>
     )
}

export default Proyectos;