import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaSpotify,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 90vw;
  padding: 25px;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    width: 100vw;
    padding: 50px 0px;
    justify-content: space-evenly;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="Styledcopy"> © 2019— Hello blue pale dot laura v</div>
      <div className="iconos">
        <FaSpotify />
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaTelegramPlane />
      </div>
    </StyledFooter>
  );
};

export default Footer;