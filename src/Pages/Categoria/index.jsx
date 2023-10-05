import React from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Categoria() {
  const { id } = useParams()
  const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === id))
  return (
    <div>
      <Header 
      titulo={categoria.nome}
      descricao={categoria.descricao}
      imagem={"assets/inicial.png"}
      />
    </div>
  )
}

export default Categoria