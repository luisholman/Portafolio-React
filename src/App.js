import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Componentes/Paginas/Home/Home';
import SobreMi from './Componentes/Paginas/SobreMi';
import Skills from './Componentes/Paginas/Skills';
import PaginaInicio from './Componentes/PaginasInicio';
import Proyectos from './Componentes/Paginas/Proyectos';
import Contacto from './Componentes/Paginas/Contacto';
import Footer from './Componentes/Paginas/Footer';




function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
        <Route path='/' exact component={PaginaInicio}/>
        <Route path='/sobremi' exact component={SobreMi}/>
        <Route path='/proyectos' exact component={Proyectos}/>
        <Route path='/skills' exact component={Skills}/>
        <Route path='/contacto' exact component={Contacto}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
