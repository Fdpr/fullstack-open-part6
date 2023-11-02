import { useSelector, useDispatch } from 'react-redux'
import Anecdote from './components/Anecdote'
import CreateForm from './components/CreateForm'
import { vote, createNew } from "./reducers/anecdoteReducer"

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = event => {
    event.preventDefault()
    dispatch(createNew(event.target.anecdoteField.value))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))}/>
      )}
      <h2>create new</h2>
      <CreateForm handleSubmit={addAnecdote}/>
    </div>
  )
}

export default App