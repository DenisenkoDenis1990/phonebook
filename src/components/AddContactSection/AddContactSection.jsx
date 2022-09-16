const shortid = require('shortid');

const AddContactSection = ({
  value,
  phone,
  onSubmitHandler,
  onInputHandler,
}) => {
  const nameInputId = shortid();
  const phoneInputId = shortid();

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={value}
            id={nameInputId}
            onInput={onInputHandler}
          ></input>
        </label>
        <label htmlFor={phoneInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={phone}
            id={phoneInputId}
            onInput={onInputHandler}
          ></input>
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContactSection;
