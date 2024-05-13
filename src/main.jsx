import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {CartProvider} from './context/CartProvider.jsx'
import {AuthProvider }from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <ChakraProvider>
    <CartProvider>
     <BrowserRouter>
    <App />
  </BrowserRouter>,
  </CartProvider>,
  </ChakraProvider>
  </AuthProvider>
 
)