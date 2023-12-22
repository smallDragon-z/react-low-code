import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
// 同步加载页面
import NoFoundPage from '@/views/404';
// import AppLayout from '@/views/AppLayout';
// import Action from '@/views/Action';
// import Data from '@/views/Data';

// 懒加载页面
const AppLayout = lazy(() => import('@/views/AppLayout'));
const Action = lazy(() => import('@/views/Action'));
const Data = lazy(() => import('@/views/Data'));
const About = lazy(() => import('@/views/About'));

const router = createBrowserRouter([
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: 'layout',
        element: <AppLayout />
      },
      {
        path: 'action',
        element: <Action />
      },
      {
        path: 'data',
        element: <Data />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/*',
    element: <NoFoundPage />
  }
]);

export default router;
