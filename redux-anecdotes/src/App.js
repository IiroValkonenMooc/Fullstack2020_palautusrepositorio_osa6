import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/anecdoteForm';

const App = () => {
  const anecdotes = useSelector( state => state.slice().sort((a, b) => b.votes-a.votes ))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch( voteAnecdote(id) )
  }

  const newAnecdote = (event) => {
    event.preventDefault()
    dispatch( createAnecdote(event.target.content.value) )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      {/* <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name='content' />
        </div>
        <button type='submit'>
          create
        </button>
      </form> */}

      <AnecdoteForm />
    </div>
  )
}

export default App