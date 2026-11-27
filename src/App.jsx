import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
   <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/products' element={<Products/>}> </Route>
        <Route path='/product/:id' element={<ProductDetails/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
   </BrowserRouter>
  )
}

export default App
