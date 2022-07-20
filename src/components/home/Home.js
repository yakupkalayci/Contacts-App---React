import { React, useState } from "react";
import Header from "../header/Header";
import AddContact from "../addContact/AddContact";
import ContactList from "../contactList/ContactList";
import Footer from "../footer/Footer";
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
          <AddContact contacts={contacts} addContact={setContacts} theme={theme}/>
        ) : windowStatus.showContacts ? (
          <ContactList contacts={contacts} setContacts={setContacts} theme={theme}/>
        ) : (
          <div className="greetingMessage">
            <h1>Welcome to your Contact List!</h1>
            <p style={{marginTop:"1rem"}}>You can add new contacts to your special contact list and list them within this app!</p>
            <p>To start please click on one of the links above.</p>
          </div>
        )
      }
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
