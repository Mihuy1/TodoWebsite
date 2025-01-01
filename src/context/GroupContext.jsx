import {createContext, useContext, useEffect, useState} from 'react';

const GroupContext = createContext();

export const GroupProvider = ({children}) => {
  const [group, setGroup] = useState('all');
  const [groups, setGroups] = useState(() => {
    return JSON.parse(localStorage.getItem('groups')) || ['personal', 'work'];
  });

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);
  return (
    <GroupContext.Provider value={{group, setGroup, groups, setGroups}}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
