import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from '../../images/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu(){
    return(
        <div>
            <Navbar fixed="top" bg="light" variant="ligth">
            <Navbar.Brand href="/"><Link to='/'></Link>
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