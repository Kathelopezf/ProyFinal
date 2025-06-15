import './Estiloscolor.css'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Footer(props) {
  return (
    <div className='color'>
      <Navbar color="faded" ligh className="me-auto letra">
          CONTACTANOS
      </Navbar>
    </div>
  );
}

export default Footer;