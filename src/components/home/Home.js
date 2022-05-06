import { React, useState } from "react";
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

  const [contacts, setContacts] = useState([]);

  const handleClick = (e) => {
    setWindowStatus({ addContact: false, showContacts: false });
    setWindowStatus({
      [e.target.name]: !windowStatus[e.target.name],
    });
  };

  const changeTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className={`Home ${theme}`}>
        <div id="themeButton">
            <button onClick={() => changeTheme()}>
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </div>
      <div id="displayPage">
        {windowStatus.showMessage ? (
            <h1>Welcome to the Contacts App!</h1>
        ) : windowStatus.addContact ? (
          <AddContact contacts={contacts} addContact={setContacts} />
        ) : windowStatus.showContacts ? (
          <ContactList contacts={contacts} />
        ) : null}
      </div>
      <div id="buttonGroups">
        <button name="addContact" onClick={handleClick}>
          Add Contact
        </button>
        <button name="showContacts" onClick={handleClick}>
          Show Contacts
        </button>
      </div>
    </div>
  );
}

export default Home;
