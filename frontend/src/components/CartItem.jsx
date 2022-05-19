const CartItem = ({ item }) => {
  return (
    <div className='cartItem'>
      <div className='cartItemProduct'>
        <img src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <button>Remove</button>
        </div>
      </div>
      <div className='cartItemPrice'>${item.price}</div>
      <div className='cartItemQty'>
        <button>-</button>
        <div className='cartItemQtyCount'>{item.cartQty}</div>
        <button>+</button>
      </div>
      <div className='cartItemTotalPrice'>
        ${(item.price * item.cartQty).toFixed(2)}
      </div>
    </div>
  )
}

export default CartItem
