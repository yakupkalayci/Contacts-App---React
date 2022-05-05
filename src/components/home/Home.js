import {React, useState} from 'react'
import AddContact from '../addContact/AddContact';
import ContactList from '../contactList/ContactList';

function Home() {
    const [windowStatus, setWindowStatus] = useState({addContact:true, contacts:false});

  return (
    <div>
        {
        windowStatus.addContact ? <AddContact />
        : 
        windowStatus.contacts ? <ContactList />
        :
        null
        }
    </div>
  )
}

export default Home