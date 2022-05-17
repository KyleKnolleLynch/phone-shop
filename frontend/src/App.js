import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <>
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </>
  )
}

export default App
