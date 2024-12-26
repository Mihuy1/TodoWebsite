import {Link, Outlet} from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
