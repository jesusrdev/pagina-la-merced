import React from "react";

// import headerImage from '../../images/animals-header-img.png'

import "./styles/Producto.css";

function Producto(props) {
  return (
    <div className="producto">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>

  );
}

export default Producto