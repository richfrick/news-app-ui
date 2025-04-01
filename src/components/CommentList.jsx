import { useLocation } from 'react-router-dom';
import { getCommentsByArticleId } from '../api';
import useApiRequest from '../hooks/useApiRequest';
import CommentCard from './CommentCard';

function CommentList() {
  const location = useLocation();
  const { article_id } = location.state;
  const { data, isLoading, error } = useApiRequest(
    getCommentsByArticleId,
    article_id
  );
  if (isLoading) {
    return <h1>Loading comments....</h1>;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      {data.map((data) => {
        return <CommentCard comments={data} key={data.comment_id} />;
      })}
    </div>
  );
}
export default CommentList;
