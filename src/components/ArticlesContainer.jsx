import { useSearchParams } from 'react-router-dom';
import ArticlesList from './ArticlesList';

function ArticlesContainer() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort_by') || '';
  const sortOrder = searchParams.get('order') || '';
  return (
    <section>
      <h1 className="m-5">All Articles</h1>
      {sortBy ? (
        <p className="text-[20px]">
          Articles currently filtered by: {sortBy} in {sortOrder} order
        </p>
      ) : null}
      <ArticlesList sortBy={sortBy} sortOrder={sortOrder} />
    </section>
  );
}

export default ArticlesContainer;
