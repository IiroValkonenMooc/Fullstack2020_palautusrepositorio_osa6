import React from 'react'
//import { useSelector, useDispatch, connect } from 'react-redux'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    // const anecdotes = useSelector( 
    //     state => state.anecdotes.slice().sort((a, b) => b.votes-a.votes )
    //         .filter(anecdote => 
    //             anecdote.content.toLowerCase().includes(state.filter.slice().toLowerCase()) 
    //         )
    //     )

    //const dispatch = useDispatch()

    const vote = async (id) => {
        const votedAnecdodeteName = props.anecdotes.find(anecdote => anecdote.id === id).content

        //dispatch( setNotificationWithTimeout(`You voted ${votedAnecdodeteName}`,5) )
        props.setNotificationWithTimeout(`You voted ${votedAnecdodeteName}`,5)
        //dispatch( voteAnecdote(id) )
        props.voteAnecdote(id)
    }

    return(
        <div>
            {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) =>{
    return {
        anecdotes: state.anecdotes.slice().sort((a, b) => b.votes - a.votes)
            .filter(anecdote =>
                anecdote.content.toLowerCase().includes(state.filter.slice().toLowerCase())
            )
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotificationWithTimeout
}

const ConnectAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
) (AnecdoteList)

//export default AnecdoteList
export default ConnectAnecdotes