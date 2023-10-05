import React from 'react'
import NavBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import {styled} from 'styled-components'
import Footer from '../components/Footer'

const StyledPaginaPadrao = styled.div`
  
`

const StyledOutlet = styled.div`

`

function PaginaPadrao() {
  return (
    <StyledPaginaPadrao>
      <NavBar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <Footer />
    </StyledPaginaPadrao>
  )
}

export default PaginaPadrao