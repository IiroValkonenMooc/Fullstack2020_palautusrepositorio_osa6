import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const anecdotes = await axios.get(baseUrl)
    return anecdotes.data
}

const postAnecdote = async (newAnecdote) => {
    const createdAnecdote = await axios.post(baseUrl, newAnecdote)
    return createdAnecdote.data
}

const likeAnecdote = async (anecdote) => {
    const updatedAnecdote = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return updatedAnecdote
}

export default { getAll, postAnecdote, likeAnecdote }