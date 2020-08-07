import React, { useEffect } from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
//import anecdoteService from './services/anecdoteService'
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/anecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'


const App = (props) => {
  //const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(initializeAnecdotes())
    props.initializeAnecdotes()
  }, [props])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

//export default App

const mapDispatchToProps = {
  initializeAnecdotes
}

const ConnectApp = connect(
  null,
  mapDispatchToProps
) (App)

export default ConnectApp