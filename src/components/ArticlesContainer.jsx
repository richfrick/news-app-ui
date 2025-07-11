import { useSearchParams } from 'react-router-dom';
import ArticlesList from './ArticlesList';

function ArticlesContainer() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort_by') || '';
  const sortOrder = searchParams.get('order') || '';
  return (
    <section>
      <h1 className="m-5">All Articles</h1>
      {sortBy || sortOrder ? (
        <h2 className="flex justify-center pb-2 text-[20px]">
          Articles currently filtered{' '}
          {sortBy ? (
            <>
              <div className="pl-1">by</div>
              <div className="pl-1 font-bold text-blue-500"> {sortBy} </div>
            </>
          ) : null}
          {sortOrder ? (
            <>
              <div className="pl-1"> in </div>
              <div className="pl-1 font-bold text-blue-500"> {sortOrder} </div>
              <div className="pl-1">order</div>
            </>
          ) : null}
        </h2>
      ) : null}
      <section aria-label="list of articles" role="list">
        <ArticlesList sortBy={sortBy} sortOrder={sortOrder} />
      </section>
    </section>
  );
}

export default ArticlesContainer;
