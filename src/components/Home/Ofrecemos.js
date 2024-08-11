import React from "react";

import iconBovinos from '../../images/icon_bovinos.png'
import iconCerdos from '../../images/icon_cerdos.png'
import iconServicios from '../../images/icon_servicios.png'

import "./styles/Ofrecemos.css";

function Ofrecemos() {
  return (
    <section id="offers">
      <h1>¿Qué ofrecemos?</h1>
      <div className="offers-cards">
        <div className="offer-card">
          <img src={iconBovinos} alt="" className="card-img" />
          <h3 className="card-title">Línea Bovino</h3>
          <p className="card-text">
            Soluciones nutricionales para todas las etapas de producción de
            carne y leche. Producimos alimentos balanceados completos,
            premezclas, alimento concentrado, sustituto lácteo, suplementos y
            aditivos.
          </p>
        </div>
        <div className="offer-card">
          <img src={iconCerdos} alt="" className="card-img" />
          <h3 className="card-title">Línea porcino</h3>
          <p className="card-text">
            Productos desarrollados para todas las etapas de producción de
            carne. Elaboramos alimentos para las etapas de gestación, lactancia,
            recría en todas sus fases, crecimiento y terminación.
          </p>
        </div>
        <div className="offer-card">
          <img src={iconServicios} alt="" className="card-img" />
          <h3 className="card-title">Servicios</h3>
          <p className="card-text">
            Productos desarrollados para todas las etapas de producción de
            carne. Elaboramos alimentos para las etapas de gestación, lactancia,
            recría en todas sus fases, crecimiento y terminación.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ofrecemos;
