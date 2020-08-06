import React from "react";
import Episodio from "./Episodio";
import embed1_movile from "../../imagenes/embed1_.png";
import embed2_movile from "../../imagenes/embed2_.png";
import embed3_movile from "../../imagenes/embed3_.png";
// import embed4_movile from "../../imagenes/embed4_.png";

const Episodios = () =>{
    return (
        <div>
            <h1>Episodios</h1>
            <Episodio episodio_img={embed1_movile}/>
            <Episodio episodio_img={embed2_movile}/>
            <Episodio episodio_img={embed3_movile}/>
        </div>
    )
}
export default Episodios;
