import React from "react";
import Home from "../Paginas/Home/Home";
import SobreMi from "../Paginas/SobreMi";
import Proyectos from "../Paginas/Proyectos";
import Servicios from "../Paginas/Servicios";
import Contacto from "../Paginas/Contacto";
import BgDatos from "../Paginas/BgDatos";


const PaginaInicio =()=>{
    return(
        <>
        
        <BgDatos />
        <SobreMi />
        <Proyectos />
        <Servicios />
        <Contacto />
        
        </>
    )
}

export default PaginaInicio;