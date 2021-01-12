import { v4 as uuidv4 } from 'uuid';
import s from './ContactList.module.css';

function ContactList({ contacts, filterValue, deleteCOntact }) {
  return (
    <ul className={s.contacts__list}>
      {contacts
        .filter(el => {
          const findContact = el.name
            .toLowerCase()
            .indexOf(filterValue.toLowerCase());
          //   console.log(findContact);
          return findContact === -1 ? false : true;
        })
        .map(el => (
          <li key={uuidv4()} className={s.contact__info}>
            <p className={s.contact}>
              <span className={s.contact__name}>{el.name}:</span>
              <span className={s.contact__number}>{el.number}</span>
            </p>
            <button
              className={s.contact__button}
              type="button"
              onClick={() => deleteCOntact(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
