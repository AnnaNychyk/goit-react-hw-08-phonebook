import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={styles.list}>
      {contacts &&
        getFilteredContacts().map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ContactList;
