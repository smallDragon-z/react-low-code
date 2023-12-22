import { Outlet } from 'react-router-dom';
import LayoutHeader from '@/components/LayoutHeader';

function App() {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  );
}

export default App;
