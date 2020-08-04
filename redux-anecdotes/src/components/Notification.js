import React from 'react'
import { useSelector } from 'react-redux';

const Notification = () => {
  const notificationText = useSelector(state => state.notification)

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

export default Notification