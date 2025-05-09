import { Link, useSearchParams } from 'react-router-dom';

function NavBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort_by') || '';
  const sortOrder = searchParams.get('order') || '';

  const handleSortChange = (event) => {
    searchParams.set('sort_by', event.target.value);
    setSearchParams(searchParams);
  };

  const handleOrderChange = (event) => {
    searchParams.set('order', event.target.value);
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSearchParams({}); //
  };

  return (
    <section className="border-b-4 flex justify-center border-[#ffa500]">
      <Link to="/" className="pr-4">
        <button>Article list</button>
      </Link>
      <div className="pr-4">
        <label>
          Topics:
          <Link to={`/articles?topic=football`}>
            <button>Football</button>
          </Link>
          <Link to={`/articles?topic=cooking`}>
            <button>Cooking</button>
          </Link>
          <Link to={`/articles?topic=coding`}>
            <button>Coding</button>
          </Link>
        </label>
      </div>
      <div className="pr-4 flex">
        <label>
          Sort By:
          <select
            name="sortOptions"
            value={sortBy}
            defaultValue="none"
            onChange={handleSortChange}
          >
            <option value="">---</option>
            <option value="comment_count">Comment Count</option>
            <option value="created_at">Date Posted</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          Sort Order:
          <select
            name="sortOrder"
            value={sortOrder}
            defaultValue="none"
            onChange={handleOrderChange}
          >
            <option value="">---</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </label>
      </div>

      <button onClick={handleClearFilters}>Clear Filters</button>
    </section>
  );
}

export default NavBar;
