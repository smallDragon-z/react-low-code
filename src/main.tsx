import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '../src/router/index.tsx';
import { RouterProvider } from 'react-router';
import './styles/normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>
);
