import { IoMdContact } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import css from '../ContactItem/ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';
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
          onClick={() => {
            deleteContact(id);
            toast.info('Contact Deleted!', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }}
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
