import React from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "../../components/Item";
import { styled } from "styled-components";

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

function Categoria() {
  const { id } = useParams();
  
  const categoria = useSelector((state) =>
    state.categorias.find((categoria) => categoria.id === id)
    );
  const itens = useSelector((state) => { 
    const regexp = new RegExp(state.busca, 'i');
    return state.itens.filter((item) => item.categoria === id && item.titulo.match(regexp));
  });


  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={'assets/categorias/header/automotivo.png'}
      />
       <StyledItems>
        {itens?.map(item => (
          <Item key={item.id} {...item}></Item>
        ))}
        </StyledItems>
    </div>
  );
}

export default Categoria;
