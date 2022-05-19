import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartTotalQty: 0,
  cartTotalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQty += 1
        toast.info(`${state.cartItems[itemIndex].name} quantity increased`, {
          position: 'bottom-left',
        })
      } else {
        const tempProduct = { ...action.payload, cartQty: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${tempProduct.name} added to cart`, {
          position: 'bottom-left',
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }, 
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
