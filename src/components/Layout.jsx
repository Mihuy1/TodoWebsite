import {Outlet} from 'react-router-dom';
import './Layout.css';
import Button from './Button';
import {useGroup} from '../context/GroupContext.jsx';

export const Layout = () => {
  const {setGroup} = useGroup();

  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Button
                className={'add__button'}
                buttonText="All"
                onClick={() => setGroup('all')}
              />
            </li>
            <li>
              <Button
                className={'add__button'}
                buttonText="Personal"
                onClick={() => setGroup('personal')}
              />
            </li>
            <li>
              <Button
                className={'add__button'}
                buttonText="Work"
                onClick={() => setGroup('work')}
              />
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
