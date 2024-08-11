import React from "react";

import "./styles/Menu.css";

const menus = ["Home", "Nosotros", "Contactanos", "Productos", "Reclamos"];

function Menu() {
  return (
    <nav className="menu">
      <div class="menu-header">
        <button id="menu-boton">☰</button>
      </div>
      <ul id="menu-lista">
        {menus.map((men) => (
          <li className="menu-item" key={men}>
            <a href="#" className="a-menu">
              {men}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
