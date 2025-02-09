import {Outlet} from 'react-router-dom';
import './Layout.css';
import Button from './Button';
import {useGroup} from '../context/GroupContext.jsx';

export const Layout = () => {
  const {setGroup, groups} = useGroup();

  const setGroupFunc = (group) => {
    setGroup(group);
    const buttons = document.querySelectorAll('.add__button');
    console.log('buttons', buttons);
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    document.querySelector(`.${group}`).classList.add('active');
    console.log('clicked on button', group);
  }
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
