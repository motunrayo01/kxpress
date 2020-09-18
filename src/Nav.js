import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';



class nav extends Component {
  render() {
    return (
      <div>
          
          <Navbar expand="lg  icon" >
            <Navbar.Brand> <img src="https://kxpress.ng/img/group-38.svg" alt="img"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="mr-auto nav ">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#link">Shippinng calculator</Nav.Link>
                <Nav.Link href="#link">Our Services</Nav.Link>
                <Nav.Link href="#link">Api Integration</Nav.Link>
                <Nav.Link href="#link">Our Location</Nav.Link>
               
                 <Button >Sign up Nows</Button>
                <Button >Sign in</Button>
               
                </Nav>
           
               
              
                
            </Navbar.Collapse>
            </Navbar>
            </div>    
        
      
    );
  }
}

export default nav;
