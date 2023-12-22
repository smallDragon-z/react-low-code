import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default App;
