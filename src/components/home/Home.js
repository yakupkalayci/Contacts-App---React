import { React, useState } from "react";
import Header from "../header/Header";
import AddContact from "../addContact/AddContact";
import ContactList from "../contactList/ContactList";
import "./Home.css";

function Home() {
  const [windowStatus, setWindowStatus] = useState({
    addContact: false,
    showContacts: false,
    showMessage : true
  });

  const [theme, setTheme] = useState("");

  const changeTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
  }


  const [contacts, setContacts] = useState([]);


  return (
    <div className={`Home ${theme}`}>
      <Header theme={theme} changeTheme={changeTheme} windowStatus={windowStatus} setWindowStatus={setWindowStatus}/>
      <div id="displayPage">
        {windowStatus.addContact ? (
          <AddContact contacts={contacts} addContact={setContacts} />
        ) : windowStatus.showContacts ? (
          <ContactList contacts={contacts} setContacts={setContacts} />
        ) : <h1>Welcome to the Contacts App!</h1>}
      </div>
    </div>
  );
}

export default Home;
