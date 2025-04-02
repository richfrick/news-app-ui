import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className="border-b-4">
      <Link to="/">
        <button>Article list</button>
      </Link>
      <Link to={`/articles?topic=football`}>
        <button>Football</button>
      </Link>
      <Link to={`/articles?topic=cooking`}>
        <button>Cooking</button>
      </Link>
      <Link to={`/articles?topic=coding`}>
        <button>Coding</button>
      </Link>
    </section>
  );
}

export default NavBar;
