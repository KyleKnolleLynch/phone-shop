import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useGetAllProductsQuery } from '../features/api/productsApi'
import { addToCart } from '../features/cart/cartSlice'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetAllProductsQuery()
  const navigate = useNavigate()

  const handleAddToCart = product => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <article className='product'>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <div className='details'>
        <span>{product.desc}</span>
        <span className='price'>$ {product.price}</span>
      </div>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </article>
  )
}

export default Product
