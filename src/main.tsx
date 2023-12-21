import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import router from '../src/router/index.tsx'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)
