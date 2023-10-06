import React from "react";
import { styled } from "styled-components";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from "../Busca";
import { Link, useLocation, useNavigate } from "react-router-dom";


const StyledNavBar = styled.nav`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;

  h1 {
    margin-left: 2%;
    cursor: pointer; 
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
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledNavBar>
      <h1 onClick={() => navigate('/')}>TRATOTECH</h1>
      <StyledLinks>
        <div>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
          >
            Pagina inicial
          </Link>
        </div>
      </StyledLinks>
      <Busca />
      <StyledIcons>
        <Link to="/carrinho">
          {location.pathname === "/carrinho" ? (
            <RiShoppingCartFill />
          ) : (
            <RiShoppingCart2Line />
          )}
        </Link>
      </StyledIcons>
    </StyledNavBar>
  );
}

export default NavBar;
