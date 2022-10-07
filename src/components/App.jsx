import { useState, useEffect } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const onFilterInputHandler = event => {
    setFilter(event.currentTarget.value);
  };

  const formSubmitHandler = data => {
    for (const contact of contacts) {
      if (data.name === contact.name) {
        toast.error(`${data.name} is already exist`);
        setContacts(prevState => [...prevState]);
        return;
      }
    }
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      const filteredState = prevState.filter(contact => {
        return contact.id !== id;
      });
      return filteredState;
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalized);
  });

  return (
    <>
      <AddContactSection onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterInput={onFilterInputHandler} />

      <ContactsList
        contacts={filteredContacts}
        onDeleteClick={deleteContact}
      ></ContactsList>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
