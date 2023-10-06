import React from 'react'
import { styled } from 'styled-components'
import { FaCartPlus } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { mudarFavorito } from '../../store/reducers/itens'
import { useDispatch, useSelector } from 'react-redux'
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-evenly;
  height: 500px;
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const ItemDesc = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const ItemImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ItemTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  margin: 10px 0;
`

const ItemDescricao = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  width: 90%;
  margin: 10px auto;
`

const ItemPreco = styled.p`
  font-weight: bold;
`

const ItemIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`
function Item(props) {
  console.log(props);
  const {
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    id,
    carrinho,
    quantidade
  } = props

  const dispatch = useDispatch()
  const estaNoCarrinho = useSelector((state) => state.carrinho.some((item) => item.id === id))
  console.log(carrinho);
  const resolverFavorito = () => {
    dispatch(mudarFavorito(id))
  }

  const resolverCarrinho = () => {
    dispatch(mudarCarrinho(id))
  }

  return (
    <ItemContainer>
      <ItemImgContainer>
        <img src={foto} alt="" />
      </ItemImgContainer>
      <ItemHeader>
        <div>
          <ItemTitle>{titulo}</ItemTitle>
          <ItemDescricao>{descricao}</ItemDescricao>
        </div>
        <ItemDesc>
          <ItemPreco>
            R$ {preco.toFixed(2)}
          </ItemPreco>
          <ItemIcons>
            {favorito ?
              <AiFillHeart color='#ff0000' onClick={resolverFavorito} /> :
              <AiOutlineHeart onClick={resolverFavorito} />}

            {carrinho ? (
              <div>
                Quantidade:
                <AiFillMinusCircle onClick={() => {
                  if (quantidade >= 1) {
                    dispatch(mudarQuantidade({ id, quantidade: -1 }));
                  }
                }} />
                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))} />
              </div>
            ) : (
              <FaCartPlus
                color={estaNoCarrinho ? 'green' : 'black'}
                onClick={resolverCarrinho}
              />
            )
            }
          </ItemIcons>
        </ItemDesc>
      </ItemHeader>
    </ItemContainer>
  )
}

export default Item