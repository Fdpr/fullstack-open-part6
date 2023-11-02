import { vote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).toSorted((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))} />)

}

export default AnecdoteList