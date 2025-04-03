import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import useApiRequest from '../hooks/useApiRequest';
import { useSearchParams } from 'react-router-dom';
function ArticleByTopic() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic');
  const { data, isLoading, error } = useApiRequest(getAllArticles, topic);

  if (isLoading) {
    return <h1>Loading Articles....</h1>;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <>
      <h1>{topic}</h1>
      <section className="flex flex-wrap gap-3 justify-center">
        {data.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </>
  );
}

export default ArticleByTopic;
