import { Link, useParams } from 'react-router-dom';
import { getArticleById } from '../api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';
import CommentContainer from './CommentContainer';
import VotingContainer from './VotingContainer';
import ErrorComponent from './ErrorCompnent';
import Loading from './LoadingComponenet';

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
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    getArticleUsingID();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div>
      <div className="border-b-3 border-[#ffa500]">
        <h1>{title}</h1>
        <h2 className="text-right">
          Posted by: {author} on {formatDate(created_at)}
        </h2>
      </div>

      <div className="flex items-center justify-center pt-3">
        <img
          className="flex items-center justify-center"
          src={article_img_url}
          alt="article image"
        />
      </div>
      <p className="pt-3">{body}</p>
      <h2 className="pt-3">Comments: {comment_count}</h2>
      <VotingContainer votes={votes} />
      <CommentContainer />
    </div>
  );
}

export default Article;
