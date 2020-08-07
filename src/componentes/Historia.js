import React from 'react'
import phone from '../imagenes/phone.png';
import styled from "styled-components"
const StyledHistoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .texto {
    padding: 20px;
    width: 35%;
    min-width: 400px;
  }
  img {
    width: 100%;
    max-width: 300px;
  }
  /* display: flex;
  width: 100vw;
  color: #060a24;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  } */
`;
const StyledImagen = styled.div`
  /* width: 50vw;
  img {
    width: 30vw;
    padding-left: 150px;
    @media (max-width: 768px) {
      width: 100vw;
      padding: 0px;
    }
  } */
`;
const StyledParrafo = styled.div`
  /* width: 23vw;
  margin-top: 250px;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 80vw;
    margin-top: 20px;
  } */
`;
const Historia = () => {
  return (
    <StyledHistoria>
      <div>
        <img src={phone} />
      </div>
      <div className="texto">
        <h3>De dónde venimos</h3>
        <p>
          Our posturings, our imagined self-importance, the delusion that we
          have some privileged position in the Universe, are challenged by this
          point of pale light.
        </p>
        <p>
          Our planet is a lonely speck in the great enveloping cosmic dark. In
          our obscurity, in all this vastness, there is no hint that help will
          come from elsewhere to save us from ourselves.
        </p>
      </div>
    </StyledHistoria>
  );
};

export default Historia;
