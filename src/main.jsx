import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { CartProvider } from "./hooks/CartContext.jsx";
import { BrowserRouter } from 'react-router-dom';
import "./app/index.css"
import AuthProvider from './hooks/AuthContext.jsx';
import { WishlistProvider } from './hooks/wishlistContext.jsx';
import { AddressProvider } from './hooks/AddressContext.jsx';
import { OrderProvider } from './hooks/OrderContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <AddressProvider>
    <OrderProvider>
    <CartProvider>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
    </ OrderProvider>
    </AddressProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
