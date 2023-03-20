import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const deleteSelectedContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.element}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              type="button"
              onClick={() => deleteSelectedContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
