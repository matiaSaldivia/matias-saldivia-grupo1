import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import banner_productos from './imagen/banner_productos.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <h1>bienvenido a mi tienda online</h1> 
      <p>Tenemos muchos productos de gran calidad para tus juegos</p>

        <img src={banner_productos} alt="Selección de teclados y ratones gamer" /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;