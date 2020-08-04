import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from '../reducers/anecdoteReducer'
import notifationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notifationReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
    )

export default store