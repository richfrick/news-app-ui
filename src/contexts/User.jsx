import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('tickle122');
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

//User provider for use in testing until the point the app allows you select a user
export const TestUserProvider = ({ children, loggedInUser = 'tickle122' }) => {
  const [currentUser, setCurrentUser] = useState(loggedInUser);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
