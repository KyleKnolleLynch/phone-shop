import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import productsReducer, {
  productsFetch,
} from './features/products/productsSlice'
import { productsApi } from './features/api/productsApi'
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
