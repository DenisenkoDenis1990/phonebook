import css from '../AddContactButton/AddContactButton.module.css';
import { IoMdAdd } from 'react-icons/io';

const AddContactButton = ({ openModal }) => {
  return (
    <button type="button" onClick={openModal} className={css.addContactButton}>
      <IoMdAdd className={css.addContactButtonIcon} />
      Add Contact
    </button>
  );
};

export default AddContactButton;
