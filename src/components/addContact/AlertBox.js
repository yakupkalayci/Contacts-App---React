import React from 'react'
import  "./AddContact.css";

function AlertBox({type, message}) {
  return (
    <div className={`alert ${type}`}>
        <h3>{message}</h3>
    </div>
  )
}

export default AlertBox