/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import fotologo from '../../assets/img/logos/navbar-logo.svg';


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

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    // ... (your existing code for responsiveNavItems)

  }, []);

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" expand="lg">
      <Container>
        <Navbar.Brand href="#page-top">
          <img src={fotologo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto py-4 py-lg-0">
            {/* <Nav.Link href="#services">More</Nav.Link> */}
            <Nav.Link href="#portfolio">About Us</Nav.Link>
            <Nav.Link href="#about">History</Nav.Link>
            <Nav.Link href="#team">Lecture</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
