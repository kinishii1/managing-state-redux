import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { alterarBusca, resetarBusca } from '../../store/reducers/busca'
import { useLocation } from 'react-router-dom'

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
  const busca = useSelector((state) => state.busca)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(resetarBusca())
  }
  , [location.pathname, dispatch])

  return (
    <StyledBusca>
      <input 
      placeholder='O que voce procura'
      value={busca}
      onChange={(e) => dispatch(alterarBusca(e.target.value))}
      />
    </StyledBusca>
  )
}

export default Busca