import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from '../../images/logo.png';
import './Menu.css';


function Menu(){
    return(
        <div>
            <Navbar bg="light" variant="ligth">
    <Navbar.Brand href="#home">
        <img className="logo" style={{width:'150px', margin: 'auto'}} src={Image} alt="Logo" />
    </Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    
  </Navbar>
  <br />
        </div>
        
    )
};

export default Menu;