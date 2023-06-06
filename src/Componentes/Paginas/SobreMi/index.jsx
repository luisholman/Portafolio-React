import React from "react";
import './About.css'
import aboutImg from '../img/sobremi.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SobreMi() {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector('a.bottom__to__top');
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
        <div className="about component__space" id="About">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt='' className='about__img' />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">Sobre mi</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Soy tecnólogo en Analisis y desarrollo de sistemas de informacion, siento un gran interés por la tecnólogia
                                 y todo lo que viene de ella, soy alguien proactivo que siempre busca fortalecer sus 
                                 habilidades blandas y aprender nuevas tecnologias por superación propia.

                                Tengo la capacidad de aprender rápido y adaptarme a cualquier ambiente para poder trabajar
                                 tanto solo, como en equipo. Para mí es muy importante la comunicación y colaboración del equipo,
                                  ya que así se llega a tener exitos en proyectos.
                            </p>
                            <p className="about__text p__color">
                                
                            </p>
                            <p className="about__text p__color">
                                
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <Link to="">
                                    <button className="about btn pointer">Download CV</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className="up__to__top__btn">
                    <Link to="home" className="bottom__to__top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chevron-up white"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </Link>
                </div>
    */}
            </div>
        </div>
    )
}

export default SobreMi;