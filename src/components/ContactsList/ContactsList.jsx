import { useGetContactsQuery } from 'redux/contactsApi';
import css from '../ContactsList/ContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
const ContactsList = () => {
  const { data, isFetching, error } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  let filteredContacts = [];

  if (!isFetching && !error) {
    const normalizedFilter = filter.filter.toLowerCase();
    filteredContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem key={id} id={id} name={name} phone={phone}></ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
