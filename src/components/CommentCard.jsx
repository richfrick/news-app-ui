import { useContext, useState } from 'react';
import { formatDate } from '../utils/utils';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../api';

function CommentCard({ setStatusMessage, setCommentDeleted, comments }) {
  const { body, author, created_at, comment_id } = comments;
  const { currentUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      await deleteComment(comment_id);
      setCommentDeleted((currentValue) => currentValue + 1);
      setError(null);
      setStatusMessage('Your comment has been deleted');
    } catch (err) {
      console.error(err);
      setError('Unabe to delete comment, please try again later');
    }
  };

  return (
    <div className="p-3 basis-64 border rounded-lg border-[#ffa500] mb-4">
      {error ? <p className="text-red-500 text-lg font-bold">{error}</p> : null}

      <div className="flex justify-end border-b-1 border-[#ffa500]">
        <h2 className="pr-3">
          {author} at {formatDate(created_at)}
        </h2>
        {currentUser === author && (
          <button className=" btn-delete" onClick={handleClick}>
            X
          </button>
        )}
      </div>
      <p className="text-left">{body}</p>
    </div>
  );
}
export default CommentCard;
