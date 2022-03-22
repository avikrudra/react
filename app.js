import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "con";
  const [contacts, setContact] = useState([]);
  const addContactHandler = (contact) => {
    //  console.log(contact);
    setContact([...contacts, contact]);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
  };
  return (
    <div className="ui container">
      <div>
        <Header />
      </div>

      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
