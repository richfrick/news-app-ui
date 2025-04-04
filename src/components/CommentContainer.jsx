import { useState } from 'react';
import CommentAdder from './CommentAdder';
import CommentList from './CommentList';

function CommentContainer() {
  const [fetchCommentsTrigger, setFetchCommentsTrigger] = useState(0);
  return (
    <section>
      <h1 className="text-[#ffa500]">------------</h1>
      <CommentAdder setFetchCommentsTrigger={setFetchCommentsTrigger} />
      <CommentList fetchCommentsTrigger={fetchCommentsTrigger} />
    </section>
  );
}
export default CommentContainer;
