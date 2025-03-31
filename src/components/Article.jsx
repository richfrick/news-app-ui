import { useLocation } from 'react-router-dom';
import { getArticleById } from '../api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';

function Article() {
  const location = useLocation();
  const { article_id } = location.state;
  const [isLoading, setIsLoading] = useState(false);
  const [articleDetails, setArticleDetails] = useState({});
  const {
    title,
    author,
    created_at,
    article_img_url,
    body,
    votes,
    comment_count,
  } = articleDetails;

  useEffect(() => {
    setIsLoading(true);

    getArticleById(article_id)
      .then(({ article }) => {
        setArticleDetails(article);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error getting article`, error);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading Article.......</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>
        Posted by: {author} on {formatDate(created_at)}
      </h2>
      <img
        className="rounded-md w-full h-40"
        src={article_img_url}
        alt="article image"
      />
      <p>{body}</p>
      <h2>Up-votes: {votes}</h2>
      <h2>Comments: {comment_count}</h2>
    </div>
  );
}

export default Article;
