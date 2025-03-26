import {Outlet} from 'react-router-dom';
import './Layout.css';
import Button from './Button';
import {useGroup} from '../context/GroupContext.jsx';

export const Layout = () => {
  const {setGroup, groups} = useGroup();

  const setGroupFunc = (group) => {
    setGroup(group);
    const buttons = document.querySelectorAll('.add__button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    document.querySelector(`.${group}`).classList.add('active');
  }
  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Button
                className={`add__button all active`}
                // Also add the name of the group as a class name
                // to the button element
                buttonText="All"
                onClick={() => setGroupFunc('all')}
              />
            </li>
            {groups.map((group) => (
              <li key={group}>
                <Button
                  className={`add__button ${group}`}
                  buttonText={group.charAt(0).toUpperCase() + group.slice(1)}
                  onClick={() => setGroupFunc(group)}
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
