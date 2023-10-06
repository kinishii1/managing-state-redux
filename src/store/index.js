import { configureStore} from '@reduxjs/toolkit';
import categorySlice
 from './reducers/categorias';
import itemSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';

const store = configureStore({
  reducer: {
    categorias: categorySlice,
    itens: itemSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice
  }
});

export default store;
