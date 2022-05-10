import React from 'react';
import "./ContactList.css";
import { BiNoEntry } from "react-icons/bi"; 

function ContactList({contacts, setContacts}) {

  const handleDelete = (e) => {

    let target = "";

    if(e.target.tagName === "path") {
      target = e.target.parentElement.parentElement.parentElement;
    }
    else if(e.target.tagName === "svg") {
      target = e.target.parentElement.parentElement;
    }
    else if(e.target.tagName === "SPAN") {
      target = e.target.parentElement;
    }

    if(target) {
      let key = Object.entries(target)[0][1].key;
      
      setContacts(contacts.filter(contact => (
        !(contact.id ===key)
      )));

    }

  }

  if(contacts.length > 0) {
    return (
      <div className='main'>
        <h2>Contacts</h2>
        <ul >
        {
          contacts.map(item => (
            <li key={item.id}>
              <span>{item.name}</span> 
              <span>{item.phoneNumber}</span>
              <span id='deleteBtn' onClick={handleDelete}><BiNoEntry /></span>
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
        <h2>No contacts here!</h2>
      </div>
    )
  }

}

export default ContactList