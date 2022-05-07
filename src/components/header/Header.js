
function Header({theme ,changeTheme, windowStatus, setWindowStatus}) {

    const handleClick = (e) => {
        console.log(windowStatus.addContact);

        
        setWindowStatus({ addContact: false, showContacts: false });
        setWindowStatus({
          [e.target.id]: !windowStatus[e.target.id],
        });
    }

  return (
    <header>
        <div id='logo'>
            <h1>ContactsAPP</h1>
        </div>
        <ul id='menu'>
            <li id="addContact" onClick={handleClick}>Add Contact</li>
            <li id="showContacts" onClick={handleClick}>Contacts</li>
        </ul>
        <div id='button'>
            <button onClick={() => changeTheme()}>
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </div>
    </header>
  )
}

export default Header