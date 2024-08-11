import React from "react";

import imgAboutUs from "../../images/about-us-img.jpg";

import "./styles/QuienesSomos.css";

function QuienesSomos() {
  return (
    <section id="about-us">
      <img src={imgAboutUs} alt="" />
      <div className="about">
        <h2>¿Quienes somos?</h2>
        <p>
          Somos una empresa con más de 15 años de experiencia en el mercado de
          la nutrición animal, ubicada en la ciudad de{" "}
          <strong>Esperanza, Provincia de de Santa Fe</strong>.Nuestro origen se
          basa en el conocimiento técnico y científico, que sumado a nuestra
          fuerte experiencia en el servicio al cliente nos ha permitido
          posicionarnos como la empresa líder en nutrición animal sustentable de
          la región.
        </p>
        <div>
          <a
            href="#"
            className="button-primary a-nosotros"
            
          >
            Más acerca nuestro
          </a>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
