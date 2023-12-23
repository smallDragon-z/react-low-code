import { Link } from 'react-router-dom';
import LayoutHeaderWrapper from './style.ts';

const LayoutHeader = () => {
  return (
    <LayoutHeaderWrapper>
      <div className="logo">LOGO</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="data">数据</Link>
          </li>
          <li className="nav-item">
            <Link to="layout">布局</Link>
          </li>
          <li className="nav-item">
            <Link to="action">动作</Link>
          </li>
        </ul>
      </nav>
      <div className="avatar">avatar</div>
    </LayoutHeaderWrapper>
  );
};

export default LayoutHeader;
