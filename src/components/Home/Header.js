import React from 'react'

import headerImage from '../../images/animals-header-img.png'

import './styles/Header.css'

function Header() 
{
  return (
    <header>
        <div class="header-text">
            <h4>somos expertos</h4>
            <h1>Corporación La Merced</h1>
            <p>
                Incremente la productividad y alcance el máximo beneficio de su negocio con los mejores programas de nutrición para cada etapa productiva en su tambo, feedlot o campo.
            </p>
            <div class="buttons">
                <a href="#offers" class="button-primary">Nuestras soluciones</a>
                <a href="#about-us" class="read-more">Leer más →</a>
            </div>
        </div>
        <div class="header-img">
            <img src={headerImage} alt="animals" />
        </div>
    </header>
  )
}

export default Header