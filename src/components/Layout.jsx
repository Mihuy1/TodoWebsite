import {Outlet} from 'react-router-dom';
import './Layout.css';
import Button from './Button';
import {useGroup} from '../context/GroupContext.jsx';
import image from '../assets/hamburger.png';
import {useEffect, useState} from 'react';

export const Layout = () => {
  const {setGroup, groups} = useGroup();
  const [sidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 1190,
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1190) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideBar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const setGroupFunc = (group) => {
    setGroup(group);
    const buttons = document.querySelectorAll('.add__button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    document.querySelector(`.${group}`).classList.add('active');
  };
  return (
    <div>
      <button
        className="hamburger-button"
        onClick={toggleSideBar}
        aria-label="Toggle sidebar menu"
      >
        <img className="hamburger" src={image} alt="Menu" />
      </button>

      <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
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
