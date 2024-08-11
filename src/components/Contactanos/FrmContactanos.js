import React from "react";

// import headerImage from '../../images/animals-header-img.png'

import "./styles/FrmContactanos.css";

function FrmContactanos() {
  return (
    <form 
      onSubmit={() => {
          alert('Mensaje enviado. \nNos contactaremos via email con usted...')
      }}
    >
      <label htmlFor="name">
          <span>Nombres y apellidos</span>
          <input id="name" name="name" type="text" required />
        </label>
      <label htmlFor="email">
        <span>Email</span>
        <input id="email" name="email" type="text" required />
      </label>
      <label htmlFor="rucodni">
        <span>RUC o DNI</span>
        <input id="rucodni" name="rucodni" type="number" min={0} max={9999999999} required />
      </label>
      <label htmlFor="empresa">
        <span>Empresa</span>
        <input id="empresa" name="empresa" type="text" required />
      </label>
      <label htmlFor="lugarProcedencia">
        <span>Lugar de Procedencia</span>
        <input id="lugarProcedencia" name="lugarProcedencia" type="text" required />
      </label>
      <label htmlFor="rubro">
        <span>Rubro</span>
        <input id="rubro" name="rubro" type="text" required />
      </label>

      <label htmlFor="especificaciones">
        <span>Especificaciones</span>
        
        <textarea id="especificaciones" name="especificaciones" ></textarea>
      </label>
      
      <label htmlFor="checkbox" className="checkbox-label">
        <input type="checkbox" id="checkbox" />
        <span>Acepto las condiciones y el aviso legal</span>
      </label>
      <button type="submit" className="submit-btn">
        Enviar
      </button>
    </form>
  );
}

export default FrmContactanos