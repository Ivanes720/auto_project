import React from 'react';
import './navBar.css';
const NavBar= () => {
    return (
      <div className='nav_bar '>
      <ul>
        <span className='bblock' href="/home">RIA.com</span>
      </ul>
      <ul>
        <span className='bblock' >Автомобили</span>
      </ul>
      <ul>
        <span className='bblock' >Недвижимость</span>
      </ul>
      <ul>
        <span className='bblock' >
          Автотовары
        </span>
      </ul>
      <ul>
        <span className='bblock' >Автозапчасти</span>
      </ul>
    </div>
   )
}

export default NavBar;