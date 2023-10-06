import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/Header'
import { useSelector, useDispatch} from 'react-redux'
import Item from '../../components/Item'
import { resetarCarrinho } from '../../store/reducers/carrinho'

const StyledCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const StyledItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`

const StyledTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap : 20px;
  width: 50%;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`

const StyledButton = styled.button`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: .3s ease-in-out;
  margin-bottom: 20px;
  &:hover {
    background-color: #d1f035;
    color: #000;
  }
`

function Carrinho() {
  const dispatch = useDispatch();
  const {carrinho, total} = useSelector((state) => {
    const regexp = new RegExp(state.busca, 'i');
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {

      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);

      total += item.preco * itemNoCarrinho.quantidade;
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      return itens;
      } , []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  } )

  return (
    <div>
      <Header 
      titulo='Carrinho de compras'
      descricao='Aqui você pode conferir os produtos que selecionou para comprar' />
      <StyledCarrinho>
        <StyledItems>
        {
          carrinho.map((item) =>  <Item key={item.id} {...item} carrinho /> )
        }
        </StyledItems>
        <StyledTotal>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </StyledTotal>
        <StyledButton onClick={
          () => dispatch(resetarCarrinho())
        }>
          Finalizar compra
        </StyledButton>
      </StyledCarrinho>
    </div>
  )
}

export default Carrinho