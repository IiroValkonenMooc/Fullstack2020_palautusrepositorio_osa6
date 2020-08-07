import React from 'react'
//import { useSelector, connect } from 'react-redux';
import { connect } from 'react-redux';

const Notification = (props) => {
  //const notificationText = useSelector(state => state.notification)
  const notificationText = props.notification

  const visibilityState = !notificationText || notificationText==='' ? 'none' : ''
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: visibilityState
  }
  return (
    <div style={style}>
      { notificationText }
    </div>
  )
}

//export default Notification

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectNotification = connect(
  mapStateToProps
) (Notification)

export default ConnectNotification