import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import about from '../img/about1.jpg'

function Home() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0)
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='home' id='Home'>

      <div className='header Navbar'>
        <img className='logo' src={logo} alt='' />
        <div className={`nav-items ${isOpen && "open"}`} >
          <Link to='/'>Pagina Principal</Link>
          <Link to='/SobreMi'>Sobre Mi</Link>
          <Link to='/Proyectos'>Portafolio</Link>
          <Link to='/Servicios'>Servicios</Link>
          <Link to='/Contacto'>Contacto</Link>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)} >
          <div className='bar'></div>
        </div>
      </div>

      {/* aqui estaba el boton flotante */}

    </div>
  )
}

export default Home;