import NotFoundWrapper from './style.tsx';
import { Link } from 'react-router-dom';

const NoFoundPage = () => (
  <NotFoundWrapper>
    <main className="no-found-page-box">
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <div className="more-link">
          <Link to="/">Click to return to the home</Link>
        </div>
      </div>
    </main>
  </NotFoundWrapper>
);
export default NoFoundPage;
