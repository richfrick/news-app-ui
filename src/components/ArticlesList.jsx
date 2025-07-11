import { useSearchParams } from 'react-router-dom';
import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import useApiRequest from '../hooks/useApiRequest';
import Loading from './LoadingComponenet';
import ErrorComponent from './ErrorCompnent';

function ArticlesList() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort_by') || '';

  const sortOrder = searchParams.get('order') || '';
  const { data, isLoading, error } = useApiRequest(
    getAllArticles,
    '',
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
    <section className="flex flex-wrap gap-3 justify-center">
      {data.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}

export default ArticlesList;
