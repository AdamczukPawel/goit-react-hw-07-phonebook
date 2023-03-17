import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'redux/contacts/contacts.slice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name.value)) {
      swal('Oops!', `${name.value} is already in contacts`, 'error');
      return;
    }

    dispatch(addContactAction(contact));
    form.reset();
    // localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <p className={css.title}>Name</p>
        <input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          name="name"
          required
        />
        <p className={css.title}>Number </p>
        <input
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          name="number"
          required
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
