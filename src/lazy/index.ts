/**
 * @Description 为了修复路由懒加载时，eslint报错的问题
 *  Fast refresh only works when a file only exports components. Move your component(s) to a separate file  react-refresh/only-export-components
 * */
import { lazy } from 'react';

const Action = lazy(() => import('@/views/Action'));
const Data = lazy(() => import('@/views/Data'));
const About = lazy(() => import('@/views/About'));
const NotFoundPage = lazy(() => import('@/views/404'));

export { Action, Data, About, NotFoundPage };
