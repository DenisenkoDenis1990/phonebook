import { Component } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
      for (const conatct of prevState.contacts) {
        if (data.name === conatct.name) {
          Notify.failure(`${data.name} is already exist`);
          return {
            contacts: [...prevState.contacts],
          };
        }
      }
      return {
        contacts: [...prevState.contacts, data],
      };
      // if (!prevState.contacts.includes(data.name)) {
      //   console.log(prevState.contacts);
      //   return {
      //     contacts: [...prevState.contacts, data],
      //   };
      // } else {
      //   alert(`${data.name} is already exist.`);
      // }
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
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

        <ContactsList
          contacts={filteredContacts}
          onDeleteClick={this.deleteContact}
        ></ContactsList>
      </>
    );
  }
}

export default App;
