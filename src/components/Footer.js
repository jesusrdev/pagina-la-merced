import React from "react";

import logoEmpresa from "../images/logo-empresa.png";
import fbLogo from "../images/fb-logo.png";
import igLogo from "../images/ig-logo.png";
import whatsappLogo from "../images/icon-whatsapp-240.png";

import "./styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="footer-information">
          <img class="logo" src={logoEmpresa} alt="" />
          <p>
            <strong>Dirección:</strong> Av. Chan Chan 170, Trujillo 13013
          </p>
          <p>
            <strong>Teléfono:</strong> +51 987654321
          </p>
          <p>
            <strong>Correo:</strong> info@lamerced.com
          </p>
          <p class="redes-sociales">
            <strong>Nuestas Redes</strong>
          </p>
          <div class="redes">
            <a href="">
              <img className="red" src={fbLogo} alt="" />
            </a>
            <a href="">
              <img className="red" src={igLogo} alt="" />
            </a>
            <a href="">
              <img className="red" src={whatsappLogo} alt="" />
            </a>
          </div>
        </div>
        <div class="footer-menu">
          <h5>Menu</h5>
          <a className="menu-item-footer" href="#">
            Inicio
          </a>
          <a className="menu-item-footer" href="#">
            Nosotros
          </a>
          <a className="menu-item-footer" href="#">
            Productos
          </a>
          <a className="menu-item-footer" href="#">
            Contactanos
          </a>
          <a className="menu-item-footer" href="#">
            Reclamos
          </a>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2023 La Merced SAC</p>
        <p></p>
      </div>
    </footer>
  );
}

export default Footer;
