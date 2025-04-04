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
    <>
      <h1>{topic}</h1>
      {sortBy ? (
        <p className="text-[20px]">
          Articles currently filtered by: {sortBy} in {sortOrder} order
        </p>
      ) : null}
      <section className="flex flex-wrap gap-3 justify-center">
        {data.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </>
  );
}

export default ArticleByTopic;
