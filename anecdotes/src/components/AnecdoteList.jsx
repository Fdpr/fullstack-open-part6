import { vote } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from 'react-redux'
import { createNotification, removeNotification } from '../reducers/notificationReducer'
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const handleVote = anecdote =>  {
        dispatch(vote(anecdote.id))
        dispatch(createNotification(`Upvoted ${anecdote.content}`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).toSorted((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => handleVote(anecdote)} />)

}

export default AnecdoteList