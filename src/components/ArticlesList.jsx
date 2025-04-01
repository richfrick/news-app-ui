import { useEffect, useState } from 'react';
import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';

function ArticlesList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      try {
        const { articles } = await getAllArticles();
        setArticleList(articles);
        setIsLoading(false);
      } catch (error) {
        console.error('error getting articles', error);
      }
    };
    getArticles();
  }, []);

  if (isLoading) {
    return <h1>Loading Articles....</h1>;
  }
  return (
    <section className="flex flex-wrap gap-3 justify-center">
      {articleList.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}

export default ArticlesList;
