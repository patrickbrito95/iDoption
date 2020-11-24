
import React, { useState, UseState, Fragment } from "react";
import "./mini-ecommerce.css";
import Menu from "./components/menu/Menu";
import Produtos from "./components/produtos/Produtos";
import Checkout from "./components/checkout/Checkout";
import ListarProdutos from "./components/produtos/Listar-Produtos";
import "bootstrap/dist/css/bootstrap.min.css";
import Clima from "./components/clima/Clima";
import axios from "axios";
import Slider from "./components/carousel/Slider";
import Formulario from "./components/formulario/formulario";
=======
import React, { useState, UseState, Fragment } from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/Menu';
import Produtos from './components/produtos/Produtos';
import Checkout from './components/checkout/Checkout';
import ListarProdutos from './components/produtos/Listar-Produtos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clima from './components/clima/Clima';
import axios from 'axios';
import Slider from './components/carousel/Slider';
import ListAnimals from './components/produtos/Listar-Animais';
import Footer from './components/footer/Footer';



function MiniEcommerce() {
  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState("0,00");

  return (
    <div>
      <Menu />
      <Clima />
      <Slider></Slider>
      <Produtos />
      <ListarProdutos />
      
      <Formulario />
    </div>
   <div className="all">
     <Menu />
     {/* <Clima /> */}
     <Slider />
     <ListAnimals />
     <Footer />

   </div>
  );
}

export default MiniEcommerce;
