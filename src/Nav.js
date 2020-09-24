import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';




class nav extends Component {
  render() {
    return (
      <div>
          
          <Navbar expand="lg bg-deep icon" >
            <Navbar.Brand className="logo"> <img src="https://kxpress.ng/img/group-38.svg" alt="img"/></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="mr-auto nav ">
               
                <Nav.Link  className="Navs" href="#link">Shipping calculator</Nav.Link>
                <Nav.Link className="Navs" href="#link">Our Services</Nav.Link>
                <Nav.Link className="Navs" href="#link">Api Integration</Nav.Link>
                <Nav.Link className="Navs" href="#link">Our Location</Nav.Link>
               
                </Nav>
           
               </Navbar.Collapse>
               <Button >Sign up Nows</Button> 
               <Button >Sign in</Button> 
               <Nav.Link href="#home"><img src="https://kxpress.ng/img/telephone.svg" alt="phoneicon"/> </Nav.Link> 
          
            </Navbar>
            </div>    
        
      
    );
  }
}

export default nav;
