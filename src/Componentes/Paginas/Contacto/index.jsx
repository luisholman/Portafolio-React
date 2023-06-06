import React from "react";
import './Contact.css';
import ContactImage from '../img/Web.png'

function Contacto() {
    return(
         <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contratame.</h1>
                            <p className="hire__text white">
                            Estoy disponible para el trabajo independiente
                            </p>
                            <p className="hire__text white">
                                por email <strong>luisoicata@hotmail.com</strong>
                            </p>
                        </div>
                        <div className="input__box">
                            <input type='text' className="contact name" placeholder="Tu Nombre " />
                            <input type='text' className="contact email" placeholder="Tu Email " />
                            <input type='text' className="contact subject" placeholder="Escribir Asunto " />
                            <textarea name='message' id="message" placeholder="Escribir mensaje" ></textarea>
                            <button className="view__more contact pointer btn">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={ContactImage} alt='' className="contact__img" />
                </div>
            </div>
         </div>
    )
}

export default Contacto;