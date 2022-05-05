import {React, useState} from 'react'
import AddContact from '../addContact/AddContact';
import ContactList from '../contactList/ContactList';

function Home() {
    const [windowStatus, setWindowStatus] = useState({addContact:false, showContacts:false});

    const handleClick = (e) => { 
        setWindowStatus({addContact:false, showContacts:false});
        setWindowStatus({
            [e.target.name] : !windowStatus[e.target.name]
        });
    }

  return (
    <div>
        {
        windowStatus.addContact ? <AddContact />
        : 
        windowStatus.showContacts ? <ContactList />
        :
        null
        }
        <button name='addContact' onClick={handleClick}>Add Contact</button>
        <button name='showContacts' onClick={handleClick}>Show Contacts</button>
    </div>
  )
}

export default Home