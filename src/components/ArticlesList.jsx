import { useEffect, useState } from 'react';
import { getAllArticles } from '../api';
import ArticleCard from './ArticleCard';

function ArticlesList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error getting articles`, error);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading Articles....</h1>;
  }
  return (
    <section>
      <div className="flex flex-wrap">
        {articleList.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </div>
    </section>
  );
}

export default ArticlesList;
