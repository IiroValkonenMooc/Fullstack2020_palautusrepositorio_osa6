import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const anecdotes = await axios.get(baseUrl)
    return anecdotes.data
}

const postAnecdote = async (newAnecdote) => {
    const createdAnecdote = await axios.post(baseUrl, newAnecdote)
    console.log('createdAnecdote :>> ', createdAnecdote)
    return createdAnecdote.data
}

export default { getAll, postAnecdote }