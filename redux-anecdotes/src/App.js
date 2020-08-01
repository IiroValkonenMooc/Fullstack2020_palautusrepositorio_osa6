import React from 'react'
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/anecdoteForm';

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App