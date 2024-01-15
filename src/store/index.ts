import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contato'
import filtroRedicer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroRedicer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
