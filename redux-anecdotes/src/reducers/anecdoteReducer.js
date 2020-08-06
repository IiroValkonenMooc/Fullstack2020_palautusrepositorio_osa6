import anecdoteService from '../services/anecdoteService'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INITIALIZE_ANECDOTES':
      console.log('action.data :>> ', action.data);
      return action.data
    case 'CREATE_ANECDOTE':
      return[
        ...state,
        action.data
      ]
    case 'VOTE_ANECDOTE':
        return state.map(anecdote => anecdote.id === action.data.id ? action.data : anecdote )
    default:
      return state
  }
}

export const initializeAnecdotes = (data) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INITIALIZE_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (anecdoteId) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToModify = anecdotes.find(anecdote => anecdote.id===anecdoteId)
    const modifiedAnecdote = {
      ...anecdoteToModify,
      votes: anecdoteToModify.votes+1
    }
    const returnedAnecdote = await anecdoteService.likeAnecdote(modifiedAnecdote)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: returnedAnecdote.data
    })
  }
}

export const createAnecdote = (contentText) => {
  return async dispatch => {
    const createAnecdote = await anecdoteService.postAnecdote(
      {
          content: contentText,
          votes: 0
      }
    )
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: createAnecdote
    })
  }
}

export default reducer