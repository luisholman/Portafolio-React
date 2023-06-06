import React from "react";
import './footer.css';
import correo from '../img/correo.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import whatsapp from '../img/whatsapp.png';
const Footer =()=>{
    return (
        <footer>
        <div className="footer">
            
            <div className="row">
                
                
                    <div className="iconos">
                        <a href="mailto:luisoicata@hotmail.com" target="_blank"><img src={correo} alt="" /></a>
                        <a href="https://github.com/luisholman" target="_blank"><img src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/luis-holman-oicata-jaime-18210023b/" target="_blank"><img src={linkedin} alt="" /></a>
                        <a href="https://wa.me/573144816697" target="_blank"><img src={whatsapp} alt="" /></a>
                    </div>
                    <div className="copy">
                        <p>Copyright @ {new Date().getFullYear()} Todos los derechos Reservados Diseñado y Desarrollado por<strong> Luis oicata jaime </strong>  </p>
                    
                    
                    </div>
                
            
            </div>
        </div>
        </footer>
    )
}

export default Footer;