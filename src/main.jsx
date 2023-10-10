import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/index.css'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import { ContextProvider } from './Context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </ContextProvider>
)
