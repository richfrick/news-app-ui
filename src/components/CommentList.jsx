import { useParams } from 'react-router-dom';
import { getCommentsByArticleId } from '../api';
import useApiRequest from '../hooks/useApiRequest';
import CommentCard from './CommentCard';
import { useState } from 'react';
import Loading from './LoadingComponenet';

function CommentList({ fetchCommentsTrigger }) {
  const { article_id } = useParams();
  const [commentDeleted, setCommentDeleted] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const { data, isLoading, error } = useApiRequest(
    getCommentsByArticleId,
    article_id,
    fetchCommentsTrigger,
    commentDeleted
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      {statusMessage ? (
        <p className="text-green-500 text-lg">{statusMessage}</p>
      ) : null}
      {data.map((data) => {
        return (
          <CommentCard
            comments={data}
            key={data.comment_id}
            setCommentDeleted={setCommentDeleted}
            setStatusMessage={setStatusMessage}
          />
        );
      })}
    </div>
  );
}
export default CommentList;
