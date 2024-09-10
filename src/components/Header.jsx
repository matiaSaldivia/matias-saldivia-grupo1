import React from 'react';
import logo from './images/logo.png';

function Header() {
  return (
    <header>
    <img src={logo} alt="Tienda gamer" />
    <nav class="menu_responsivo">
        
      <ul>
          <div class="linea_1"></div>
        <div class="linea_2"></div>
        <div class="linea_3"></div>
        <li>Inicio</li>
        <li>Acerca de nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;