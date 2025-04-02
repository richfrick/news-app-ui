import { useContext } from 'react';
import { UserContext } from '../contexts/User';

function Header() {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="border-b-4">
      <h1>Welcome to NC-News</h1>
      <h2>Current User:</h2>
      <p>{currentUser}</p>
    </header>
  );
}

export default Header;
