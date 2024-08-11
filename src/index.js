import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Menu from './components/Menu'
import Footer from './components/Footer'

import Home from './containers/Home';
import Contactanos from './containers/Contactanos';
import Nosotros from './containers/Nosotros';
import Productos from './containers/Productos';
import Reclamos from './containers/Reclamos';

// const lista = [Home, Nosotros, Contactanos, Productos, Reclamos]



const contenedor = document.getElementById('root');

ReactDOM.render(
  <div>
    <Menu />
    <Home /> {/* Acá cambian su contenedor */}
    <Nosotros />
    <Contactanos />
    <Productos />
    <Reclamos />
    <Footer />
  </div>,
  contenedor
)



const listaCompleta = [
  document.querySelector('.home'),
  document.querySelector('.nosotros'),
  document.querySelector('.contactanos'),
  document.querySelector('.productos'),
  document.querySelector('.reclamos')
]

listaCompleta[1].style.display = 'none';
listaCompleta[2].style.display = 'none';
listaCompleta[3].style.display = 'none';
listaCompleta[4].style.display = 'none';



const listaMenus = document.getElementsByClassName('a-menu')

const listaMenusFooter = document.getElementsByClassName('menu-item-footer')


for (let i = 0; i < listaMenus.length; i++) {
  const element = listaMenus[i];

  // Evento para los clicks del menu de navegacion
  element.addEventListener( 'click', () => {
    desaparecerContenedores();
    listaCompleta[i].style.display = 'inherit';
  })
  
  // Evento para los clicks del menu del footer
  listaMenusFooter[i].addEventListener( 'click', () => {
    desaparecerContenedores();
    listaCompleta[i].style.display = 'block';
  })

}


function desaparecerContenedores() {
  for (let i = 0; i < listaCompleta.length; i++) {
    const element = listaCompleta[i];

    element.style.display = 'none'
    
  }
}

// Evento para el burguer button
const esconder = document.getElementById('menu-boton')
const lista = document.getElementById('menu-lista')

esconder.addEventListener('click', function () {
    lista.classList.toggle('show')
})



// Evento para el boton de quienes somos
document.querySelector('.a-nosotros').addEventListener( 'click', () => {
  desaparecerContenedores();
  listaCompleta[1].style.display = 'block';
})