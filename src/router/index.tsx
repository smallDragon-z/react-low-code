import { createBrowserRouter } from 'react-router-dom';
import LazyComponent from '@/components/LazyComponent';
import App from '@/App.tsx';
// 同步加载页面
import AppLayout from '@/views/AppLayout';
// 懒加载页面
import { Action, About, NotFoundPage, Data } from '@/lazy';

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
        element: <LazyComponent children={<Action />} />
      },
      {
        path: 'data',
        element: <LazyComponent children={<Data />} />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/*',
    element: <LazyComponent children={<NotFoundPage />} />
  }
]);

export default router;
