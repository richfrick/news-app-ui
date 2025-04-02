import CommentAdder from './CommentAdder';
import CommentList from './CommentList';

function CommentContainer() {
  return (
    <section>
      <h1 className="m-5">------------</h1>
      <h2>comments</h2>
      <CommentAdder />
      <CommentList />
    </section>
  );
}
export default CommentContainer;
