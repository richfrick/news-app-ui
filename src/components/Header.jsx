import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import logo from '../assets/snickerdoodle-logo.svg';

function Header() {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="border-b-4 flex justify-center pb-3 border-[#ffa500]">
      <img src={logo} width={150} height={150} alt="website logo" />
      <div className="border-3 rounded-lg border-[#ffa500]">
        <h1>Welcome to Elaborate-Snickerdoodle</h1>
        <h2>Home to the most takled about articles on the web</h2>
        <h2>(so long as it's football, coding or cooking)</h2>
      </div>
      <div className="text-sm pl-2">
        <p>Current User:</p>
        <p>{currentUser}</p>
      </div>
    </header>
  );
}

export default Header;
