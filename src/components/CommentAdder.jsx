import { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { postNewComment } from '../api';

function CommentAdder({ setFetchCommentsTrigger }) {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [comment, setComment] = useState('');
  const searchBox = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.length === 0) {
      setSuccess('');
      setError('You cannot submit an empty comment');
      searchBox.current.classList.add('invalid');
    } else {
      try {
        await postNewComment(article_id, currentUser, comment);

        setComment('');
        setFetchCommentsTrigger((currentValue) => currentValue + 1);
        setSuccess('Your comment has been successfully posted');
        setError(null);
        searchBox.current.classList.remove('invalid');
      } catch (err) {
        console.error(err);
        setSuccess('');
        setError('Your comment coult not be processed. Please try again later');
      }
    }
  };

  function handleInputChange(event) {
    setComment(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tell us what you think
        {error ? (
          <p className="text-red-500 text-lg font-bold">{error}</p>
        ) : null}
        {success ? (
          <p className="text-green-500 text-lg font-bold">{success}</p>
        ) : null}
        <input
          name="commentField"
          ref={searchBox}
          type="text"
          value={comment}
          placeholder="Add a comment"
          onChange={handleInputChange}
        />
      </label>

      <button>Add Comment</button>
    </form>
  );
}

export default CommentAdder;
