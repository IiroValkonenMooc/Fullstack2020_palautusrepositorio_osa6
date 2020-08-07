import React from 'react'
//import { useDispatch, connect } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        //dispatch(createAnecdote(event.target.content.value) )
        props.createAnecdote(event.target.content.value)
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

//export default AnecdoteForm

const mapDispatchToProps = {
    createAnecdote
}

const ConnectAnecdoteForm = connect(
    null,
    mapDispatchToProps
) (AnecdoteForm)

export default ConnectAnecdoteForm