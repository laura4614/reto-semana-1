import React from 'react'
import remote from '../imagenes/icon1.svg';
import programing from '../imagenes/icon2.svg';
import code from '../imagenes/icon3.svg';
import security from '../imagenes/icon4.svg';
import styled from "styled-components";


const StyledTemas = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  flex-wrap: wrap;
`;
//

const StyledTittle = styled.h1`
  text-align: center;
  /* font-family: Arial, Helvetica, sans-serif; */
  color: #060a24;
`;
const Sistemas= () => {
  return (
    <div>
      <StyledTittle>Algunos de nuestros temas</StyledTittle>
      <StyledTemas>
        <article>
          <img src={remote} />
          <h3>Trabajo remoto</h3>
        </article>
        <article>
          <img src={programing} />
          <h3>Repensando la programación</h3>
        </article>
        <article>
          <img src={code} />
          <h3>Bases del código</h3>
        </article>
        <article>
          <img src={security} />
          <h3>Seguridad informática</h3>
        </article>
      </StyledTemas>
      {/* <StyledWave>
        <img className="wave1" src={wave1} />
      </StyledWave> */}
    </div>
  );
};

export default Sistemas;