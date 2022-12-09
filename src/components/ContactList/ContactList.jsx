import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/contacts/operations';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css'
  
const getFilteredContacts = (contacts, filterValue) => {
  if (filterValue) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  };
  return contacts;
  };

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className={css.contactList__box}>
      <h3 className={css.contactList__title}>Your contact list:</h3>
      <ul>{filteredContacts.length > 0 && filteredContacts.map(item =>
        <Contact key={item.id} name={item.name} number={item.number} contactID={item.id} />)}
      </ul>
    </div>
  )
};

export default ContactList;