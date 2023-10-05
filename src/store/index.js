import { configureStore} from '@reduxjs/toolkit';
import categorySlice
 from './reducers/categorias';
import itemSlice from './reducers/itens';

const store = configureStore({
  reducer: {
    categorias: categorySlice,
    itens: itemSlice,
  }
});

export default store;
