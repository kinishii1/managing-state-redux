import React from "react";
import { styled } from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  padding: 0 2%;
  align-items: center;
  background-color: #282c34;
  color: white;
  font-size: 1rem;

  span {
    font-weight: bold;
  }
`;

const StyledIcons = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  a {
    color: white;
    text-decoration: none;
  } 
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledIcons>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </StyledIcons>
      <p>
        Desenvolvido por <span>Kin Ishii</span>
      </p>
    </StyledFooter>
  );
}

export default Footer;
