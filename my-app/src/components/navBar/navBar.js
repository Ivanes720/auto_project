import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
       <Nav>
        <NavItem>
          <NavLink href="#">RIA.com</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Автомобили</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Недвижимость</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Автотовары</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Автозапчасти</NavLink>
        </NavItem>
      </Nav>

    </div>
  );
}

export default NavBar;