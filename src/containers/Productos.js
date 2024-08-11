import React from "react";
import Producto from "../components/Productos/Producto";

import img1 from "../images/captura 2.png";
import img2 from "../images/Captura 4.png";
import img3 from "../images/corina producto.png";
import img4 from "../images/Cuyes2.png";
import img5 from "../images/mijorojo500g.png";
import img6 from "../images/mijobalnco500g.png";
import img7 from "../images/afrecho.jpg";
import img8 from "../images/torta de soya 45 kg.jpg";
import img9 from "../images/b-engorde-engorde.jpg";

function Productos() {
  return (
    <main className="productos">
      <center>
        <h1>Productos</h1>
      </center>
      <div className="productos-contenedor">
        <Producto
          img={img1}
          title="Alpiste"
          description="Rico en ácidos grasos. Contiene calcio, fósforo, potasio y magnesio. Ayuda a mantener la salud ósea y muscular."
        />
        <Producto img={img2} title="Piamontina" description="Complementos nutricionales que pueden proporcionar a los plumíferos las vitaminas esenciales que necesitan." />
        <Producto
          img={img3}
          title="Coripollo"
          description="Alimento balanceado para pollos. 18% de proteína y 50 kg de inicio, crecimiento y engorde. Desarrolla los músculos de las piernas y el pecho de las aves."
        />
        <Producto img={img4} title="Cuyes" 
        description="Ideal para elevar la condición nutricional del ganado" />
        <Producto
          img={img5}
          title="Mijo Rojo"
          description="
        Calorías: 360
        >Proteínas: 11g.
>Hidratos de carbono: 65 g.
>Fibra: 8 g.
>Grasas totales: 4g.
        "
        />
        <Producto img={img6} title="Mijo Blanco" description="Grasas insaturadas: 3.20 g.
>Calcio: 3 mg.
>Magnesio: 110 mg.
>Hierro: 3 mg.
>Vitamina B1 :0.42mg." />
        <Producto img={img7} title="Afrecho" description="Nivel medio de Fibra (20 a 45%)
        Proteína (14 a 17%).
        Contiene poco almidon" />
        <Producto img={img8} title="Torta de soya" description="PROTEINA	MÍN. 46%
        HUMEDAD	MÁX. 13%
        FIBRA	MÁX. 4%
        GRASA	MÁX. 4%
        " />
        <Producto img={img9} title="Engorde" description="Materia seca, Proteína, Energía metabolizable, Energía de mantenimiento." />
      </div>
    </main>
  );
}

export default Productos;
