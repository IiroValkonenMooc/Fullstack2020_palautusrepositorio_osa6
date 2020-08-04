const initialState =  'some text => change to null when ready'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION_MESSAGE':
            return action.data    
        case 'SET_NOTIFICATION_MESSAGE_NULL':
            return null
        default:
            return state
    }
}

export const setNotificationMessage = (newMessage) => {
    console.log('newMessage :>> ', newMessage);

    return(
        {
            type: 'SET_NOTIFICATION_MESSAGE',
            data:  newMessage 
        }
    )
}

export const setNotificationNull = () => {
    return(
        {
            type: 'SET_NOTIFICATION_MESSAGE_NULL'
        }
    )
}

export default reducer