import { IoMdContact } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import css from '../ContactItem/ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';
export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  return (
    <li key={id} className={css.contactListItem}>
      <IoMdContact className={css.reactIcons}></IoMdContact>
      <div className={css.contactWrapper}>
        <div>
          <p className={css.contactName}>{name}</p>
          <p className={css.contactNumber}>{phone}</p>
        </div>
        <button
          onClick={() => deleteContact(id)}
          type="button"
          className={css.deleteButton}
          disabled={result.isLoading}
        >
          <AiOutlineDelete className={css.deleteButtonIcon} />
        </button>
      </div>
    </li>
  );
};
