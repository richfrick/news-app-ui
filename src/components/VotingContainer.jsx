import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { patchUpOrDownVote } from '../api';

function VotingContainer({ votes }) {
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [voteCount, setVoteCount] = useState(0);

  const handleUpVoteClick = (upOrDownVoteNum) => {
    patchUpOrDownVote(article_id, upOrDownVoteNum).catch(() => {
      setVoteCount((currentVoteCount) => {
        setError('Your vote coult not be processed. Please try again later');
        return currentVoteCount - upOrDownVoteNum;
      });
    });
    setVoteCount((currentVoteCount) => {
      setError(null);
      return currentVoteCount + upOrDownVoteNum;
    });
  };

  return (
    <div className="">
      <h2>Votes: {votes + voteCount}</h2>
      <p className="m-5">did you like this article</p>
      <div>
        {error ? (
          <p className="text-red-500 text-lg font-bold">{error}</p>
        ) : null}
        <button onClick={() => handleUpVoteClick(1)}>Yes</button>
        <button onClick={() => handleUpVoteClick(-1)}>No</button>
      </div>
    </div>
  );
}

export default VotingContainer;
