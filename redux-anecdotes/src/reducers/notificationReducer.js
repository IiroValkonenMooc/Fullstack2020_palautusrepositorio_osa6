let timers = 0;

const reducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION_MESSAGE':
            return action.data    
        case 'SET_NOTIFICATION_MESSAGE_NULL':
            return null
        default:
            return state
    }
}

export const setNotificationWithTimeout = (text, showTimeInSeconds) => {
    return async dispatch => {
        timers++
        dispatch({
            type: 'SET_NOTIFICATION_MESSAGE',
            data: text
        })
        setTimeout(() => {
            timers--
            console.log('timers :>> ', timers); 
            if(timers===0){
                dispatch({
                    type: 'SET_NOTIFICATION_MESSAGE_NULL'
                })
            }
        }, showTimeInSeconds * 1000);
    }
}

export const setNotificationMessage = (newMessage) => {
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