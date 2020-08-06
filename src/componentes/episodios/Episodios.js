import React from "react";
import Episodio from "./Episodio";
import styled from "styled-components";
import embed1 from "../../imagenes/embed1.png";
import embed2 from "../../imagenes/embed2.png";
import embed3 from "../../imagenes/embed3.png";
import embed4 from "../../imagenes/embed4.png";
import embed1_ from "../../imagenes/embed1_.png";
import embed2_ from "../../imagenes/embed2_.png";
import embed3_ from "../../imagenes/embed3_.png";



const Episodios = styled.div`
  position: relative;
  h1 {
    color: #fff;
    font-size: 40px;
  }
  ::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -10px;
    width: 110%;
    height: 110%;
    background-image: linear-gradient(225deg, #0000ff 0%, #0000a3 100%);
    z-index: -1;
    transform: skewY(-5deg);
  }
  @media (min-width: 768px) {
    ::after {
      transform: skewY(-2deg);
    }
  }
`;
const Contenedor = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 600px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 1000px;
    grid-gap: 10px;
  }
`;
const StyledImagen1 = styled.div`
  background-image: url(${embed1});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed1_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen2 = styled.div`
  background-image: url(${embed2});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed2_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen3 = styled.div`
  background-image: url(${embed3});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed3_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen4 = styled.div`
  background-image: url(${embed4});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed3_});
    background-repeat: no-repeat;
  }
`;

const GalleryEpisodios = () => {
  return (
    <Episodios>
      <h1>Episodios</h1>
      <Contenedor>
        <StyledImagen1></StyledImagen1>
        <StyledImagen2></StyledImagen2>
        <StyledImagen3></StyledImagen3>
        <StyledImagen4></StyledImagen4>
      </Contenedor>
    </Episodios>
  );
};

export default GalleryEpisodios;