/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import logoImage from '../../assets/img/logos/logo-None-universitas-klabat-0ede7ae5.png';


import React, { useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };


    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const navbarToggler = document.body.querySelector('.navbar-toggler');



  }, []);

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" expand="lg">
      <Container>
        <Navbar.Brand href="#about">
          <img src={logoImage} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto py-4 py-lg-0">
            {/* <Nav.Link href="#services">More</Nav.Link> */}
            <Nav.Link href="#portfolio"><strong>About Us</strong></Nav.Link>
            <Nav.Link href="#about"><strong>History</strong></Nav.Link>
            <Nav.Link href="#team"><strong>Lecture</strong></Nav.Link>
            <Nav.Link href="#contact"><strong>Contact Us</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
