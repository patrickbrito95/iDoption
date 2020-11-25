import React, { useState, UseState, Fragment, Component } from "react";
import "./mini-ecommerce.css";
import Menu from "./components/menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import Slider from "./components/carousel/Slider";
import Formulario from "./components/formulario/formulario";
import ListAnimals from "./components/produtos/Listar-Animais";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router-dom";

function MiniEcommerce() {

  return (
    <div className="all">
      <Menu />

      <Slider></Slider>

      <Route exact path="/" component={ListAnimals} />
      <Route exact path="/formulario" component={Formulario} />

      <Footer />
    </div>
  );
}

export default MiniEcommerce;
