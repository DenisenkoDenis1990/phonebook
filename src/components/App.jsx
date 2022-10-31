import { useState, useEffect } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import AddContactButton from './AddContactButton/AddContactButton';
import Modal from './Modal/Modal';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
      }
    });
  }, []);

  return (
    <div className="container">
      <h1 className="Title">Search contact</h1>
      <Filter />
      <ContactsList />
      <AddContactButton openModal={openModal} />
      {isModalOpen && (
        <Modal>
          <AddContactSection onCloseModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
