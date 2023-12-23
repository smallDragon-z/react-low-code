import NotFoundWrapper from './style.tsx';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <NotFoundWrapper>
    <section className="error-container">
      <span>4</span>
      <span>
        <span className="screen-reader-text">0</span>
      </span>
      <span>4</span>
    </section>
    <div className="link-container">
      <div className="more-link">
        <Link to="/app/layout">Click to return to the home</Link>
      </div>
    </div>
  </NotFoundWrapper>
);
export default NotFoundPage;
