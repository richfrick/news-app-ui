import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import logo from '../assets/snickerdoodle-logo.svg';

function Header() {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="border-b-4 flex">
      <img src={logo} width={150} height={150} alt="website logo" />
      <div>
        <h1>Welcome to Elaborate-Snickerdoodle</h1>
        <h2>Home to the most takled about articles on the web</h2>
      </div>
      <div className="text-sm">
        <h2>Current User:</h2>
        <p>{currentUser}</p>
      </div>
    </header>
  );
}

export default Header;
