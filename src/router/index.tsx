import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import NoFoundPage from '@/views/404';

// 懒加载路由
const AppLayout = lazy(() => import('@/views/AppLayout'));
const About = lazy(() => import('@/views/About'));
const Action = lazy(() => import('@/views/Action'));
const Data = lazy(() => import('@/views/Data'));

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
