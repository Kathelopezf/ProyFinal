import './EstilosMenu.css'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='fondo' light expand="md">

      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto letramenu" navbar >
          <NavItem>
            <Link className="nav-link" to="/">Inicio</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/pag2">Ofertas de cursos</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;