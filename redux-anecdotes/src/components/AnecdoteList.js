import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationMessage, setNotificationNull } from '../reducers/notificationReducer'

const AnecdoteList = ( ) => {

    const anecdotes = useSelector( 
        state => state.anecdotes.slice().sort((a, b) => b.votes-a.votes )
            .filter(anecdote => 
                anecdote.content.toLowerCase().includes(state.filter.slice().toLowerCase()) 
            )
        )
    const dispatch = useDispatch()

    const vote = async (id) => {
        const votedAnecdodeteName = anecdotes.find(anecdote => anecdote.id === id).content

        dispatch( setNotificationMessage(`You voted ${votedAnecdodeteName}`) )
        dispatch( voteAnecdote(id) )

        setTimeout(() => {
            dispatch(setNotificationNull())
        }, 5000);
    }

    return(
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList