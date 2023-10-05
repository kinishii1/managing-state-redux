import React from 'react'
import { styled } from 'styled-components'

const StyledBusca = styled.div`
  input {
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }
`


function Busca() {
  return (
    <StyledBusca>
      <input placeholder='O que voce procura'/>
    </StyledBusca>
  )
}

export default Busca