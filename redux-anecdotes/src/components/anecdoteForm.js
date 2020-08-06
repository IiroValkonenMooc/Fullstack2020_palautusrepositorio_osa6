import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdoteService'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        dispatch(createAnecdote(event.target.content.value) )
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div>
                    <input name='content' />
                </div>
                <button type='submit'>
                    create
                </button>
            </form>
        </div>
    )
}
export default AnecdoteForm