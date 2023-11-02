import PropTypes from 'prop-types';

const Anecdote = ({anecdote, handleVote}) => <div>
<div>
  {anecdote.content}
</div>
<div>
  has {anecdote.votes}
  <button onClick={handleVote}>vote</button>
</div>
</div>

Anecdote.propTypes = {
    anecdote: PropTypes.object,
    handleVote: PropTypes.func
}

export default Anecdote