import { useDispatch } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"
import { createNotification, removeNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = event => {
        event.preventDefault()
        const notification = event.target.anecdoteField.value
        dispatch(createNew(notification))
        dispatch(createNotification(`Added ${notification}`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return <>
        <h2>create new</h2>
        <form onSubmit={e => addAnecdote(e)}>
            <div><input type="text" name="anecdoteField" /></div>
            <button>create</button>
        </form>
    </>
}

export default AnecdoteForm