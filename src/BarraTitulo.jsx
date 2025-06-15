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

function BarraTitulo(props) {
  return (  
    <div className='color'>
      <Navbar color="faded" ligh className="me-auto letra">
          Sergio el Bailador "Katherin Lopez Fernandez"
      </Navbar>
    </div>
  );
}

export default BarraTitulo;