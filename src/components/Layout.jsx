import {Outlet} from 'react-router-dom';
import './Layout.css';
import Button from './Button';
import {useGroup} from '../context/GroupContext.jsx';

export const Layout = () => {
  const {setGroup, groups} = useGroup();

  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Button
                className="add__button"
                buttonText="All"
                onClick={() => setGroup('all')}
              />
            </li>
            {groups.map((group) => (
              <li key={group}>
                <Button
                  className="add__button"
                  buttonText={group.charAt(0).toUpperCase() + group.slice(1)}
                  onClick={() => setGroup(group)}
                />
              </li>
            ))}
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
