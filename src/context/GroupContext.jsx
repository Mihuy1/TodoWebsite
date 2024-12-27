import {createContext, useContext, useState} from 'react';

const GroupContext = createContext();

export const GroupProvider = ({children}) => {
  const [group, setGroup] = useState('all');

  return (
    <GroupContext.Provider value={{group, setGroup}}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
