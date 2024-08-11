import React from "react";
import imgHistory from './Img/molino-castillo.png'
import './estilos/Historia.css'

class historia extends React.Component {
    render(){
        return(
            <div className="history">
                <div className="history__container">
                    <div className="history__texts">
                        <h2 className="subtitle">Nuestra Historia</h2>
                        <p className="history__paragraph">Corporacion la Merced nace en el año 2003 como una empresa dedicada a la distribución de productos para nutrición animal elaborados por Alimental. En el año 2004 Alimental pasó a ser Provimi, y Nutriar paso de ser netamente un Distribuidor a ser una Unidad de Producción Descentralizada, primero con producción en planta de terceros y luego con planta de elaboración propia.
                            <br />
                            En el 2010, ante la coyuntura y las necesidades del mercado desarrollamos nuestra propia línea de productos: Mixar. Así logramos ajustar aún más nuestra oferta de productos a lo que requería el mercado. Crecimos, innovamos y nos adaptamos para trabajar codo a codo con los productores de leche y de carne porcina y bovina.
                            <br />
                            El crecimiento y la necesidad de trabajar cerca del cliente nos ha llevado a afrontar una nueva etapa en la vida: dejar de ser un distribuidor de Provimi para fortalecer nuestra posición como la empresa líder en nutrición animal de la región.
                            <br />
                            Estamos cada día más cerca de ustedes, con un equipo técnico de más de 10 profesionales a campo, acompañando el crecimiento y desarrollo de sus animales. Con una planta flexible, para satisfacer la demanda de cada uno. Y con una logística imbatible, para que sus animales reciban en tiempo y forma la mejor nutrición.</p>
                        </div>
                        <figure className="history__picture">
                            <img src={imgHistory} alt="historia_img"/>
                        </figure>
                </div>
            </div>
        )
    }
}

export default historia