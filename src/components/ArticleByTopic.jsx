import { useSearchParams } from 'react-router-dom';
import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import useApiRequest from '../hooks/useApiRequest';
import ErrorComponent from './ErrorCompnent';
import Loading from './LoadingComponenet';

function ArticleByTopic() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort_by') || '';
  const sortOrder = searchParams.get('order') || '';
  const topic = searchParams.get('topic');
  const { data, isLoading, error } = useApiRequest(
    getAllArticles,
    topic,
    sortBy,
    sortOrder
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <section aria-label="filtered topic">
      <h1>{topic}</h1>
      {sortBy ? (
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
      <section
        className="flex flex-wrap gap-3 justify-center"
        aria-label="list of articles"
        role="list"
      >
        {data.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </section>
  );
}

export default ArticleByTopic;
