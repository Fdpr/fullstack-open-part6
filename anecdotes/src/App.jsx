import { useSelector, useDispatch } from 'react-redux'
import Anecdote from './components/Anecdote'
import AnecdoteForm from './components/AnecdoteForm'
import { vote } from "./reducers/anecdoteReducer"

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.toSorted((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))}/>
      )}
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App