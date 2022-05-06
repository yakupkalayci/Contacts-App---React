import {useState} from 'react'
import "./AddContact.css";

function AddContact() {

  const [contactInfos, setContactInfos] = useState({name:"", phoneNumber:""});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactInfos);
    setContactInfos({name:"", phoneNumber:""});
  }

  const handleInput = (e) => {
    setContactInfos({
      ...contactInfos,
      [e.target.name] : e.target.value
    });
  }
  
  return (
    <div id='main'>
      <h2>Add new contact!</h2> 
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name:</label> <br />
          <input id='name' name='name' type='text' value={contactInfos.name} onChange={handleInput} /> 
        </div>
        <div className='formGroup'>
          <label htmlFor='phoneNumber'>Phone Number:</label> <br/>
          <input id='phoneNumber' name='phoneNumber' type='phone' value={contactInfos.phoneNumber} onChange={handleInput} />
        </div>
        <div className='formGroup'>
          <input type='submit' value='Add' id='button'/>
        </div>
      </form>
    </div>
  )
}

export default AddContact