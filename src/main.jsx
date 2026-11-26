import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import App from './App.jsx'
import './styles/global.css'
import './styles/variables.css'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
