import "./mini-ecommerce.css";
import Menu from "./components/menu/Menu";
import Formulario from "./components/formulario/formulario";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/carousel/Slider';
import ListAnimals from './components/produtos/Listar-Animais';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
import Questionario from './components/questionario/Questionario';





function MiniEcommerce() {

  return (
    <div className="all">
      <Menu />

      <Slider></Slider>
      
      <Route exact path='/' component={ListAnimals} />
      <Route exact path='/questionario' component={Questionario} />
      <Route exact path='/formulario' component={Formulario} />

      <Footer />


    </div>
  );
}

export default MiniEcommerce;
