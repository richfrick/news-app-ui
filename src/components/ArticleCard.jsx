import { Link } from 'react-router-dom';
import { formatDate } from '../utils/utils';

const ArticleCard = ({ article }) => {
  const { title, topic, author, votes, comment_count, created_at } = article;

  return (
    <Link
      to="/article/"
      state={article}
      className="p-3 basis-64 border rounded-lg border-[#243c5a]"
    >
      <div>
        <h2>{title}</h2>
        <h3>{topic}</h3>
        <h3>{author}</h3>
        <h3>{votes}</h3>
        <h3>{comment_count}</h3>
        <h3>{formatDate(created_at)}</h3>
      </div>
    </Link>
  );
};

export default ArticleCard;
