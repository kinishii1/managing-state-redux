import React from 'react'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f6ebeb;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`

const StyledDescricao = styled.div`
  h1 {
    font-size: 40px;
    margin-bottom: 10px;
    color: #333;
  }
  h2 {
    font-size: 30px;
    color: #666;
  }
`

function Header({titulo, descricao, imagem}) {
  return (
    <StyledHeader>
      <StyledDescricao>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </StyledDescricao>
      <div>
        <img style={{width:'auto',height:'auto'}} src={imagem} />
      </div>
    </StyledHeader>
  )
}

export default Header