import { useParams } from 'react-router-dom';
import { getArticleById } from '../api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';
import CommentContainer from './CommentContainer';
import VotingContainer from './VotingContainer';

function Article() {
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articleDetails, setArticleDetails] = useState({});
  const {
    title,
    author,
    created_at,
    article_img_url,
    body,
    comment_count,
    votes,
  } = articleDetails;

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const getArticleUsingID = async () => {
      setIsLoading(true);
      try {
        const article = await getArticleById(article_id);
        setArticleDetails(article);
        setIsLoading(false);
      } catch (error) {
        console.log('error getting article', error);
        setError(error);
      }
    };
    getArticleUsingID();
  }, []);

  if (isLoading) {
    return <h1>Loading Article.......</h1>;
  }

  if (error) {
    return <Error error={error} />;
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
      <h2>Comments: {comment_count}</h2>
      <VotingContainer votes={votes} />
      <CommentContainer />
    </div>
  );
}

export default Article;
