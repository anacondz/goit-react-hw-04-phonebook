import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filters/Filters';
import css from './App.module.css';
import { useLocalStorage } from './LocalStorage';
import { useState } from 'react'; 

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContacts = newContact => {
    contacts.find(prev => prev.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`) :
      setContacts(prev => [...prev, newContact])
      };
  
  const filterContact = evt => {
    const { value } = evt.currentTarget;
    setFilter( value );
  }

  const deleteContact = id => {
    const wrong = prev => prev.id !== id;
    const updatedLi = contacts.filter(wrong)
    setContacts(updatedLi)
  };

  
  return (
    <div className={css.form__wrapper}>
      <h2 className={css.form__title}>Phonebook</h2>
      <Form addContacts={addContacts} contacts={contacts} />
      <h2 className={css.form__title}>Contacts</h2>
      <Filter filteredContent={filter} filterContact={filterContact} />
      <Contacts
        contacts={contacts}
        filteredContent={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
  }
