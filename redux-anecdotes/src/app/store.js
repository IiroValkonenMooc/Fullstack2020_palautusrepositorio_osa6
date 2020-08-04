import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import anecdoteReducer from '../reducers/anecdoteReducer'
import notifationReducer from '../reducers/notificationReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notifationReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
    )

export default store