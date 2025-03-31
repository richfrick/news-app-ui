const ArticleCard = ({ article }) => {
  return (
    <div className="basis-64 border rounded-lg border-[#243c5a] shadow-md overflow-hidden">
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <h3>{article.author}</h3>
      <h3>{article.votes}</h3>
      <h3>{article.comment_count}</h3>
      <h3>{article.created_at}</h3>
    </div>
  );
};

export default ArticleCard;
