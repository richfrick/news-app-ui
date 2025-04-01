import { formatDate } from '../utils/utils';

function CommentCard({ comments }) {
  const { body, author, created_at } = comments;

  return (
    <div className="p-3 basis-64 border rounded-lg">
      <h2 className="border-b-3 text-right">
        {author} at {formatDate(created_at)}
      </h2>
      <p className="text-left">{body}</p>
    </div>
  );
}
export default CommentCard;
