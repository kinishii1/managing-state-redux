import { createSlice } from '@reduxjs/toolkit';

const initialState = ''

const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    alterarBusca: (state, action) => action.payload,
    resetarBusca: () => initialState
  }
})

export default buscaSlice.reducer
export const { alterarBusca, resetarBusca } = buscaSlice.actions
