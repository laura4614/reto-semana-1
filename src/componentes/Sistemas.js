import React from 'react'
import remote from '../imagenes/icon1.svg';
import programing from '../imagenes/icon2.svg';
import code from '../imagenes/icon3.svg'
import security from '../imagenes/icon4.svg'
import styled from "styled-components";



const Icon =({icono,text})=> <div> <img src={icono}/> <p>{text}</p> </div>


const Sistemas = () => {
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
    return (
        <div>
            <h1>Algunos de nuestros sistemas</h1>
            <Icon icono={remote} text="Trabajo remoto"/>
            <Icon icono={programing} text="Repensando la programación"/>
            <Icon icono={code} text="Bases del código"/>
            <Icon icono={security} text="Seguridad informática"/>
        </div>
    )
}

export default Sistemas
