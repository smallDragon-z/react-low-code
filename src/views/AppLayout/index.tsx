import LayoutWrapper from './style.ts';
import LayoutTop from '@/components/LayoutTop';
import LayoutLeft from '@/components/LayoutLeft';
import LayoutCenter from '@/components/LayoutCenter';
import LayoutRight from '@/components/LayoutRight';

const Layout = () => (
  <LayoutWrapper>
    <LayoutTop />
    <LayoutLeft />
    <LayoutCenter />
    <LayoutRight />
  </LayoutWrapper>
);

export default Layout;
