import { useState, useEffect } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddContactButton from './AddContactButton/AddContactButton';
import Modal from './Modal/Modal';
const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(false);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      const filteredState = prevState.filter(contact => {
        return contact.id !== id;
      });
      return filteredState;
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
      }
    });
  }, []);

  const normalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalized);
  });

  return (
    <div className="container">
      <h1 className="Title">Search contact</h1>
      <Filter filter={filter} onFilterInput={onFilterInputHandler} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteClick={deleteContact}
      ></ContactsList>
      <AddContactButton openModal={openModal} />

      {isModalOpen && (
        <Modal>
          <AddContactSection
            onSubmit={formSubmitHandler}
            onCloseModal={closeModal}
          />
        </Modal>
      )}
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
    </div>
  );
};

export default App;
