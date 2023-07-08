import React from "react";
import './Skill.css';
import imgHtml from '../img/html5.png';
import imgCss from '../img/css3.png';
import imgBootstrap from '../img/bootstrap.png';
import imgJs from '../img/js.png';
import imgGitHub from '../img/imggithub.png';
import imgMysql from '../img/mysql.png';

function Skills ()  {
    return (
        <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">Mis Habilidades</h1>
                <p className="heading p__color">
                    Aqui te muestro mis Fortalezas
                </p>
                <p className="heading p__color">
                    
                </p>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">

                                <img className="img" src={imgHtml} alt="" />
                           
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">HTML</h1>
                                {/*<p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                >*/}
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            
                            <img className="img" src={imgCss} alt="" />

                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">CSS</h1>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            
                            <img className="img" src={imgBootstrap} alt="" />

                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">BOOTSTRAP</h1>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">

                            <img className="img" src={imgJs} alt="" />
                            
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">JAVASCRIPT</h1>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            
                            <img className="img" src={imgGitHub} alt="" />

                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">GITHUB</h1>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">

                            <img className="img" src={imgMysql} alt="" />
                            
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">MYSQL</h1>
                                
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;
 