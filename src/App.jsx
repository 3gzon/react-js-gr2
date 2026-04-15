import react from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Header from './components/Header/Header'
import SingleProduct from './pages/SingleProduct'
import Products from './pages/Products'


function App() {
 
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </div>

  )
}

export default App
