import { IoMdContact } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import css from '../ContactsList/ContactsList.module.css';
const ContactsList = ({ contacts, onDeleteClick }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <IoMdContact className={css.reactIcons}></IoMdContact>
            <div className={css.contactWrapper}>
              <div>
                <p className={css.contactName}>{name}</p>
                <p className={css.contactNumber}>{number}</p>
              </div>
              <button
                onClick={() => onDeleteClick(id)}
                type="button"
                className={css.deleteButton}
              >
                <AiOutlineDelete className={css.deleteButtonIcon} />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
