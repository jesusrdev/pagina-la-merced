import React from "react";

// import headerImage from '../../images/animals-header-img.png'

import "./styles/FrmReclamos.css";

function FrmReclamos() {
    return (
        <form
            onSubmit={() => {
                alert('Reclamo enviado. \nNos contactaremos via email con usted...')
            }}
        >
            <label htmlFor="name">
                <span>Fecha del reclamo</span>
                <input id="name" name="name" type="date" required />
            </label>

            <label htmlFor="name">
                <span>Fecha del incidente</span>
                <input id="name" name="name" type="date" required />
            </label>

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

            <label htmlFor="detallesReclamo">
                <span>Detalles del reclamo</span>

                <textarea id="detallesReclamo" name="detallesReclamo" ></textarea>
            </label>

            <label htmlFor="resultadoDeseado">
                <span>Resultado Deseado</span>

                <textarea id="resultadoDeseado" name="resultadoDeseado" ></textarea>
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

export default FrmReclamos