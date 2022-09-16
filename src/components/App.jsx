import { Component } from 'react';
import AddContactSection from './AddContactSection/AddContactSection';
import ContactsList from './ContactsList/ContactsList';
const shortid = require('shortid');
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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
        contacts: prevState.contacts.concat(contact),
      };
    });
    this.isEmpty = false;
  };

  render() {
    return (
      <>
        <AddContactSection
          value={this.state.name}
          phone={this.state.number}
          onSubmitHandler={this.onSubmitHandler}
          onInputHandler={this.onInputHandler}
        />
        {!this.isEmpty && <h2>Contacts</h2>}
        <ContactsList contacts={this.state.contacts}></ContactsList>
      </>
    );
  }
}

export default App;
