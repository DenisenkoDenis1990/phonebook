import { Component } from 'react';
const shortid = require('shortid');

class AddContactSection extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid();
  phoneInputId = shortid();

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

    this.props.onSubmit(contact);
    //console.log(contact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    //const { value, phone, onSubmitHandler, onInputHandler } = this.props;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              onInput={this.onInputHandler}
            ></input>
          </label>
          <label htmlFor={this.phoneInputId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              id={this.phoneInputId}
              onInput={this.onInputHandler}
            ></input>
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}
export default AddContactSection;
