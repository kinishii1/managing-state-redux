import React from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const StyledCategorias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    color: #333;
  }
`

const StyledCategoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  div:hover {
    transform: scale(1.10);
  }

  img {
    width: 150px;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  h2 {
    font-size: 30px;
    color: #666;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #999;
    text-align: center;
  }

`;

function Home() {
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categorias);

  return (
    <div>
      <Header
        titulo={"Classificados Tech"}
        descricao={
          "Compre diversos tipos de produtos no melhor site do Brasil!"
        }
        imagem={"assets/inicial.png"}
      />
      <StyledCategorias>
        <div>
          <h1>Categorias</h1>
        </div>
        <StyledCategoria>
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h2>{categoria.nome}</h2>
              <p>{categoria.descricao}</p>
            </div>
          ))}
        </StyledCategoria>
      </StyledCategorias>
    </div>
  );
}

export default Home;
