import React from "react";
import imgmision from './Img/Mision.png'
import imgvision from './Img/Vision.png'
import imgvalores from './Img/Valores.png'
import './estilos/Mision.css'


class nosotros extends React.Component {
    render(){
        return(
            <div className="they">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner w-75 m-auto">
                        <div class="carousel-item active">
                            <section class="d-flex flex-row justify-content-between" data-id="1">
                                <div className="they__texts">
                                    <h2 className="subtitle">Misión 
                                        <br />
                                        <span className="they__des"> Nuestra
                                            meta es :</span></h2>
                                    <p className="they__cont">Mejorar los resultados del productor agropecuario y demás miembros de la cadena 
                                        agroalimentaria a través de soluciones integrales y sustentables.</p>
                                </div>
                                <figure className="they__picture">
                                    <img src={imgmision} alt="Mision"/>
                                </figure>
                            </section>
                        </div>
                        <div class="carousel-item">
                            <section class="d-flex flex-row justify-content-between" data-id="2">
                                <div class="they__texts">
                                    <h2 class="subtitle">Vision 
                                        <br />
                                        <span class="they__des">Esperamos:
                                            </span></h2>
                                    <p class="they__cont">Ser una empresa referente, que brinda soluciones integrales de calidad a los diferentes actores de la cadena agroalimentaria.</p>
                                </div>
            
                                <figure class="they__picture">
                                    <img src={imgvision} alt="Vision"/>
                                </figure>
                            </section>
                        </div>
                        <div class="carousel-item">
                            <section class="d-flex flex-row justify-content-between" data-id="3">
                                <div class="they__texts">
                                    <h2 class="subtitle">Valores
                                        <br />
                                        <span class="they__des"> Fomentaremos siempre:
                                            </span></h2>
                                    <p class="they__cont">
                                        <ul>
                                            <li><p class="card-text"><strong>Respeto</strong></p></li>
                                            <li><p class="card-text"><strong>Respeto</strong></p></li>
                                            <li><p class="card-text"><strong>Creatividad</strong></p></li>
                                        </ul>
                                    </p>
                                </div>
            
                                <figure class="they__picture">
                                    <img src={imgvalores} alt="Valores"/>
                                </figure>
                            </section>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default nosotros