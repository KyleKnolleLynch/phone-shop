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
    deleteFromCart(state, action) {
      const filteredCart = state.cartItems.filter(
        item => item.id !== action.payload.id
      )

      state.cartItems = filteredCart
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

      toast.error(`${action.payload.name} deleted from cart`, {
        position: 'bottom-left',
      })
    },
    decrementCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQty > 1) {
        state.cartItems[itemIndex].cartQty--

        toast.info(`${action.payload.name} quantity decreased`, {
          position: 'bottom-left',
        })
      } else if (state.cartItems[itemIndex].cartQty === 1) {
        const filteredCart = state.cartItems.filter(
          item => item.id !== action.payload.id
        )

        state.cartItems = filteredCart
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        toast.error(`${action.payload.name} deleted from cart`, {
          position: 'bottom-left',
        })
      }
    },
  },
})

export const { addToCart, deleteFromCart, decrementCart } = cartSlice.actions

export default cartSlice.reducer
