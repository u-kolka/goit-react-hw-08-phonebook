import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/contacts/operations';
import Contact from 'components/Contact/Contact';
  
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
  // console.log(filteredContacts)
  useEffect(() => {
  // async function fetchData() {
    dispatch(fetchContacts())
  // }
  // fetchData();
}, [dispatch]); 

  return (
    <ul>
      {filteredContacts.length > 0 && filteredContacts.map(item =>
        <Contact key={item.id} name={item.name} number={item.number} contactID={item.id} />)}
    </ul>)
}

export default ContactList;