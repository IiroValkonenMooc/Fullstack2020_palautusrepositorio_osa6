import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdoteService'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const createdAnecdote = await anecdoteService.postAnecdote(
            {
                content: event.target.content.value,
                votes: 0
            }
        )
        dispatch( createAnecdote(createdAnecdote) )
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