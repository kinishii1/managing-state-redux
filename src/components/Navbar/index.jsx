import React from "react";
import { styled } from "styled-components";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from "../Busca";

const StyledNavBar = styled.nav`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;

  h1 {
    margin-left: 2%;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  a {
    color: white;
    text-decoration: none;
  }

  .active {
    border-bottom: 2px solid white;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  a {
    color: white;
    text-decoration: none;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <h1>TRATOTECH</h1>
      <StyledLinks>
        <div>
          <a
            className={window.location.pathname === "/" ? "active" : ""}
            href="/"
          >
            Pagina inicial
          </a>
        </div>
      </StyledLinks>
      <Busca />
      <StyledIcons>
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <RiShoppingCartFill />
          ) : (
            <RiShoppingCart2Line />
          )}
        </a>
      </StyledIcons>
    </StyledNavBar>
  );
}

export default NavBar;
