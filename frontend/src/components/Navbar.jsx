import { Link } from 'react-router-dom'
import { ShoppingBag } from '../icons'

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/'>
          <h2>Phone Shop</h2>
        </Link>
        <Link to='cart'>
          <div className='navBag'>
            <ShoppingBag />
            <div className='navQty'>
              <p>0</p>
            </div>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
