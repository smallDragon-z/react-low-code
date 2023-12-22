import LayoutTopWrapper from './style.ts';
import { Link } from 'react-router-dom';

const Layout = () => (
  <LayoutTopWrapper>
    <header>
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="data">数据源</Link>
          </li>
          <li className="nav-item">
            <Link to="appLayout">布局</Link>
          </li>
          <li className="nav-item">
            <Link to="action">动作</Link>
          </li>
        </ul>
      </nav>
    </header>
  </LayoutTopWrapper>
);

export default Layout;
