import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from '../../images/logo.png';


function Menu(){
    return(
        <div>
            <Navbar bg="light" variant="ligth">
    <Navbar.Brand href="#home">
        <img style={{width:'150px'}} src={Image} alt="Logo" />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Cadastro">Cadastro</Nav.Link>
      <Nav.Link href="#Disclaimer">Disclaimer</Nav.Link>
    </Nav>
    
  </Navbar>
  <br />
        </div>
        
    )
};

export default Menu;