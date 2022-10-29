import { IoMdContact } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteContact } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from '../ContactsList/ContactsList.module.css';
const ContactsList = ({ onDeleteClick }) => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items]);

  const normalized = filter.toLowerCase();
  const filteredContacts = items.filter(item => {
    return item.name.toLowerCase().includes(normalized);
  });

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <IoMdContact className={css.reactIcons}></IoMdContact>
            <div className={css.contactWrapper}>
              <div>
                <p className={css.contactName}>{name}</p>
                <p className={css.contactNumber}>{number}</p>
              </div>
              <button
                onClick={() => dispatch(deleteContact(id))}
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
