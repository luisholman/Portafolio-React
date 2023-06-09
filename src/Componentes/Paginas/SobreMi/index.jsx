import React from "react";
import './About.css'
import aboutImg from '../img/sobremi.png';
import diseñar from "../img/diseñar.svg";
import musica from "../img/musica.svg";
import game from "../img/game.svg";
import caminar from "../img/caminar.svg";
import programar from "../img/programar.svg";
import Television from "../img/television.svg"



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
                                 y todo lo que viene de ella, soy alguien proactivo y responsable que siempre busca fortalecer sus 
                                 habilidades y conocimientos, tengo la capacidad de aprender facilmente.  Me gusta adquirir conocimiento en nuevas tecnologias.

                                Tengo la capacidad de adaptarme facilmente a cualquier ambiente laboral. Para mí es muy importante la comunicación y colaboración en equipo,
                                  ya que así se llega a tener exito en los proyectos a realizar.
                            </p>
                            <p className="about__text p__color">
                                
                            </p>
                            <p className="about__text p__color">
                                
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a download href="./Cv.pdf" >
                                    <button className="about btn pointer">Download CV</button>
                                </a>
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


                <div className="skill">
                    <h1 className="about__heading "> Hobbies</h1>
                </div>
                <div className="iconos__skill">

                    <div className="img">
                    <img src={programar} alt="" />
                    <p>Programar</p>
                    </div>

                    <div className="img">
                    <img src={diseñar} alt="" />
                    <p>Diseñar</p>
                    </div>

                    <div className="img">
                    <img src={musica} alt="" />
                    <p>Oir Musica</p>
                    </div>

                    <div className="img">
                    <img src={caminar} alt="" />
                    <p>Caminar</p>
                    </div>

                    <div className="img">
                    <img src={game} alt="" />
                    <p>Jugar</p>
                    </div>

                    <div className="img">
                    <img src={Television} alt="" />
                    <p>Ver Television</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SobreMi;