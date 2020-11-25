
import React, { useState, UseState, Fragment, Component } from "react";

import Formulario from "./components/formulario/formulario";
import React, { useState } from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Slider from './components/carousel/Slider';
import ListAnimals from './components/produtos/Listar-Animais';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';

import ListAnimals from "./components/produtos/Listar-Animais";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router-dom";




function MiniEcommerce() {
  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState("0,00");

  return (
    <div className="all">
      <Menu />

      <Slider></Slider>
      
      <Route exact path='/' component={ListAnimals} />
      <Route exact path='/formulario' component={Formulario} />

      <Footer />
    
   </div>

  );
}

export default MiniEcommerce;
