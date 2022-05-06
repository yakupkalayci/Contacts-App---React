import React from 'react';
import { generateID } from '../../utils/utils';
import "./ContactList.css";

function ContactList({contacts}) {
  if(contacts.length > 0) {
    return (
      <div className='main'>
        <h2>Contacts</h2>
        <ul >
        {
          contacts.map(item => (
            <li key={generateID()}>
              <span>{item.name}</span> 
              <span>{item.phoneNumber}</span>
            </li>
          ))
        }
        </ul>
      </div>
    )
  } 
  else {
    return (
      <div className='main'>
        <h3>No contacts here!</h3>
      </div>
    )
  }

}

export default ContactList