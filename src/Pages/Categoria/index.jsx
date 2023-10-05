import React from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Categoria() {
  const { id } = useParams();
  const categoria = useSelector((state) =>
    state.categorias.find((categoria) => categoria.id === id)
    );
  const itens = useSelector((state) => state.itens.filter((item) => item.categoria === id));

  console.log(itens);
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={"assets/inicial.png"}
      />
       {/* <div>
        {itens?.map(item => (
          // <Item key={item.id} {...item} />
        ))}
        </div> */}
    </div>
  );
}

export default Categoria;
