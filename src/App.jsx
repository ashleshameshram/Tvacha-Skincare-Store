import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'

function App() {
  return (
   <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/products' element={<Products/>}> </Route>
        <Route path='/product/:id' element={<ProductDetails/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
