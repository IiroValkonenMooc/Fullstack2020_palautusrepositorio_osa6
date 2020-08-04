const initialState =  'some text => change to null when ready'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION_MESSAGE':
            return action.data    
        default:
            return state
    }
}

export const setNotificationMessage = (newMessage) => {
    return(
        {
            action: 'SET_NOTIFICATION_MESSAGE',
            data: { newMessage }
        }
    )
}

export default reducer