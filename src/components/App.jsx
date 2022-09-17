import { Component } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
const shortid = require('shortid');
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  isEmpty = true;

  onInputHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortid(),
    };

    this.setState(prevState => {
      return {
        name: '',
        number: '',
        filter: '',
        contacts: [...prevState.contacts, contact],
      };
    });
    this.isEmpty = false;
  };

  onFilterInputHandler = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const normalized = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalized);
    });

    return (
      <>
        <AddContactSection
          value={this.state.name}
          phone={this.state.number}
          onSubmitHandler={this.onSubmitHandler}
          onInputHandler={this.onInputHandler}
        />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterInput={this.onFilterInputHandler}
        />

        <ContactsList contacts={filteredContacts}></ContactsList>
      </>
    );
  }
}

export default App;
