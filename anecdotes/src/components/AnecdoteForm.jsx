import { useDispatch } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = event => {
        event.preventDefault()
        dispatch(createNew(event.target.anecdoteField.value))
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