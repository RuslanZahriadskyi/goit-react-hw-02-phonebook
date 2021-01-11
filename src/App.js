import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  newContact = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  findContact = e => {
    const { filter, contacts } = this.state;
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    contacts
      .filter(el => {
        const find = el.name.toLowerCase().indexOf(filter.toLowerCase());
        // console.log(find);
        return find === -1 ? false : true;
      })
      .map(el => (
        <li key={uuidv4()}>
          <p>
            {el.name}: {el.number}
          </p>
          {/* <span>{el.name}:</span>
          <span>{el.number}</span> */}
        </li>
      ));
    // contacts.some(el => {
    //   console.log(el.includes(filter));
    // });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { name, contacts, number } = this.state;

    const id = uuidv4();

    const newContacts = contacts.concat({ id: id, name, number });

    this.setState(prevState => {
      return { ...prevState, contacts: newContacts };
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <form onSubmit={this.handelSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="[A-Za-z]{1, 28}"
                placeholder="Tomy Brait"
                required
                value={name}
                onChange={this.newContact}
              ></input>
            </label>
            <label>
              Number
              <input
                type="tel"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                name="number"
                value={number}
                onChange={this.newContact}
              ></input>
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <label>
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.findContact}
            ></input>
          </label>
          <ul>
            {contacts.map(el => (
              <li key={uuidv4()}>
                <span>{el.name}:</span>
                <span>{el.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
