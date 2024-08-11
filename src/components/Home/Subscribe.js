import React from "react";

import "./styles/Subscribe.css";

function Subscribe() {
  return (
    <section id="subscribe">
      <h3>Suscríbase para recibir noticias</h3>
      <form onSubmit={() => {
              alert('Suscrito correctamente')
            }}>
        <label for="correo">
          Correo Electrónico *{" "}
          <input className="input-text" type="email" id="correo" required />
        </label>
        <label for="">
          <input
            type="submit"
            value="Quiero Suscribirme"
            class="button-primary button-submit-subscribe"
          />
        </label>
      </form>
    </section>
  );
}

export default Subscribe;
