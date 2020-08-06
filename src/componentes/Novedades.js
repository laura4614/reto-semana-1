import React from "react";
import styled from "styled-components";

const Styledcontenedor = styled.div`
  width: 100vw;
  height: 250px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
      transform: skewY(-3deg);
    }
  }
`;

const StyledBoton = styled.button`
  background: #00f3bb;
  color: #060a24;
  width: 280px;
  padding: 20px 0px;
  max-width: 280px;
  padding: 20px 0px;
  border: none;
  @media (min-width: 768px) {
    width: 50vw;
  }
  :hover {
    background: -webkit-linear-gradient(-30deg, #00f3bb, #0000ec);
    color: #ffffff;
  }
`;

const StyledText = styled.h1`
  color: #ffffff;
`;
const Novedades = () => {
  return (
    <Styledcontenedor>
      <div>
        <StyledText>¿Querés las últimas novedades?</StyledText>
        <StyledBoton> ESCUCHÁ LOS EPISODIOS</StyledBoton>
      </div>
    </Styledcontenedor>
  );
};

export default Novedades;