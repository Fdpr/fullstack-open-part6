import { vote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    return anecdotes.toSorted((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))} />)

}

export default AnecdoteList