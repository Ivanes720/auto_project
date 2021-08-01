import React from 'react';
import './navBar.css';
const NavBar= () => {
    return (
      <div className='nav_bar '>
      <ul>
        <span className='bblock' href="/home">Active</span>
      </ul>
      <ul>
        <span className='bblock' >spannk</span>
      </ul>
      <ul>
        <span className='bblock' >spannk</span>
      </ul>
      <ul>
        <span className='bblock' >
          Disabled
        </span>
      </ul>
      <ul>
        <span className='bblock' >spannk</span>
      </ul>
    </div>
   )
}

export default NavBar;