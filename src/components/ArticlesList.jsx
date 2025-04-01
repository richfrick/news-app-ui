import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import useApiRequest from '../hooks/useApiRequest';

function ArticlesList() {
  const { data, isLoading, error } = useApiRequest(getAllArticles);

  if (isLoading) {
    return <h1>Loading Articles....</h1>;
  }
  if (error) {
    return <Error error={error} />;
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
