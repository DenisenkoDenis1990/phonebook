const ContactsList = ({ contacts, onDeleteClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button onClick={() => onDeleteClick(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
