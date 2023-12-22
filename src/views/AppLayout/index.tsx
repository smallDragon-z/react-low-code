import { Suspense } from 'react';
import LayoutWrapper from './style.ts';
import LayoutLeft from '@/components/LayoutLeft';
import LayoutCenter from '@/components/LayoutCenter';
import LayoutRight from '@/components/LayoutRight';

const Layout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LayoutWrapper>
      <LayoutLeft />
      <LayoutCenter />
      <LayoutRight />
    </LayoutWrapper>
  </Suspense>
);

export default Layout;
