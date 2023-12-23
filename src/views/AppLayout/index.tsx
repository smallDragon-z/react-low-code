import LayoutWrapper from './style.ts';
import LayoutLeft from '@/components/LayoutLeft';
import LayoutCenter from '@/components/LayoutCenter';
import LayoutRight from '@/components/LayoutRight';

const Layout = () => (
  <LayoutWrapper>
    <LayoutLeft />
    <LayoutCenter />
    <LayoutRight />
  </LayoutWrapper>
);

export default Layout;
