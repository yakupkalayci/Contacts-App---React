import { useState } from "react";
import AlertBox from "./AlertBox";
import { generateID } from '../../utils/utils';
import "./AddContact.css";

function AddContact({ contacts, addContact, theme }) {
  const [contactInfos, setContactInfos] = useState({
    name: "",
    phoneNumber: "",
    id:generateID()
  });

  const [alert, setAlert] = useState({show:false, type:"", message:""});

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contactInfos.name && contactInfos.phoneNumber) {
      addContact([...contacts, contactInfos]);
      setContactInfos({ name: "", phoneNumber: "", id:generateID() });

      setAlert({show:true, type:"success", message:"Successfully added!"});
      setTimeout(() => {
        setAlert({...alert, show:false});
      }, 2000);
    } else {
      setAlert({show:true, type:"danger", message:"Inputs can't be left!"});
      setTimeout(() => {
        setAlert({...alert, show:false});
      }, 2000);
    }

  };

  const handleInput = (e) => {
    setContactInfos({
      ...contactInfos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="main" style={theme === "dark" ? {backgroundColor:"rgb(62,62,62)"} : {backgroundColor:"inherit"}}>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name:</label> <br />
          <input
            id="name"
            name="name"
            type="text"
            value={contactInfos.name}
            onChange={handleInput}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phoneNumber">Phone Number:</label> <br />
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="phone"
            value={contactInfos.phoneNumber}
            onChange={handleInput}
          />
        </div>
        <div className="formGroup">
          <input type="submit" value="Add" id="button" />
        </div>
      </form>
      {
        alert.show && <AlertBox type={alert.type} message={alert.message} />
      }
    </div>
  );
}

export default AddContact;
