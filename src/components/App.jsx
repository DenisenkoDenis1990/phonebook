import { Component } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilterInputHandler = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const normalized = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalized);
    });

    return (
      <>
        <AddContactSection onSubmit={this.formSubmitHandler} />

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
