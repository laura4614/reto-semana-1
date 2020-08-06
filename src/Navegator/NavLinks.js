import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px;

  li {
    font-family: Arial, Helvetica, sans-serif;
    color: 060a24;
    font-size: 16px;
    padding-right: 35px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0000ec;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 40px;
    right: 0;
    height: 40vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 20px;
      color: #fff;
    }
  }
`;

const Navlinks = ({ open }) => {
  return (
    <Ul open={open}>
      <li>EPISODIOS</li>
      <li>NOSOTROS</li>
      <li>ENTREVISTAS</li>
      <li>TÓPICOS</li>
    </Ul>
  );
};

export default Navlinks;
