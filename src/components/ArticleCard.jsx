import { Link } from 'react-router-dom';
import { formatDate } from '../utils/utils';

const ArticleCard = ({ article }) => {
  const { article_id, title, topic, author, votes, comment_count, created_at } =
    article;

  return (
    <Link
      to={`/articles/${article_id}`}
      state={article}
      className="p-3 basis-64 border rounded-lg border-[#ffa500]"
    >
      <div>
        <h2 className="border-b-1 border-[#ffa500] font-bold pb-1">{title}</h2>
        <h3>
          Created by {author} on {formatDate(created_at)}
        </h3>
        <h3>Up-votes: {votes}</h3>
        <h3>Comments: {comment_count}</h3>
        <h3>Topic: {topic}</h3>
      </div>
    </Link>
  );
};

export default ArticleCard;
