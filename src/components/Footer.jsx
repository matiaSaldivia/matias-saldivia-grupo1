import React from 'react';
import iconface from './images/facebook.png';
import iconinsta from './images/instagram.png';
import iconyou from './images/youtube.png';

function Footer() {
  return (
    <img src={iconface} alt="facebook" />
    <img src={iconinsta} alt="instagram" />
    <img src={iconyou} alt="youtube" />

<p>· eCommerce Gamer 2024 ·</p>
  );
}

export default Footer;