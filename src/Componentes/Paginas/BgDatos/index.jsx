import React from "react";
import about from '../img/about1.jpg'
import './bgdatos.css'
const BgDatos =()=>{
    return(
      <div className='home__bg'>
      <div className="container">
        <div className="home__content">
          <div className='datos'>
          <div className="home__meta">
            
            <h2 className="frelencer_content">
              Luis Oicata Jaime
              <br />
              <span className='desarrollo'> Desarrollador</span>
            </h2>
          </div>

          <div className="img">
            <img src={about} alt="img" />
          </div>
          </div>

        </div>
      </div>

    </div>
    )
}

export default BgDatos;