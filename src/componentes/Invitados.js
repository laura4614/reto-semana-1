import React from 'react'
import styled from "styled-components";
import grace_hopper from '../imagenes/grace-hopper.png';
import katie_Bouman from "../imagenes/Katie-Bouman.png";
import Margaret_Hamilton from '../imagenes/Margaret_Hamilton.png';
import ERA from '../imagenes/An_E.R.A.Univac_1103_computer_in the_1950s.png';
import computers_operator from '../imagenes/Computer_operators_with_an_Eniac_the_world’s_first_programmable_general-purpose_computer.png';
import susan_kare from '../imagenes/susan-kare.png';





const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 33vw;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
`;

const StyledTittle = styled.h1`
  color: #060a24;
`;

const Invitados = () => {
  return (
    <div>
      <StyledTittle> Invitadas/os estelares</StyledTittle>
      <StyledGallery>
        <article>
          <img src={grace_hopper} />
        </article>
        <article>
          <img src={katie_Bouman} />
        </article>
        <article>
          <img src={Margaret_Hamilton} />
        </article>
        <article>
          <img src={ERA} />
        </article>
        <article>
          <img src={computers_operator} />
        </article>
        <article>
          <img src={susan_kare} />
        </article>
      </StyledGallery>
    </div>
  );
};

export default Invitados;