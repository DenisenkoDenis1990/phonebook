import { useGetContactsQuery } from 'redux/contactsApi';
import css from '../ContactsList/ContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
const ContactsList = () => {
  const { data, isFetching, error } = useGetContactsQuery();

  return (
    <ul className={css.contactList}>
      {!isFetching &&
        !error &&
        data.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
            ></ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
