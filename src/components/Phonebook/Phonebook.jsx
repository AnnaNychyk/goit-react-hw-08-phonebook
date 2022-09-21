import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';
import { getLoading } from 'redux/contacts/contacts-selectors';
import styles from './Phonebook.module.css';

const Phonebook = () => {
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.title}>Contacts</h2>
      <Filter onChange={onSetFilter} value={filter} />

      {loading && <p>...load contacts</p>}

      <ContactList />
    </div>
  );
};

export default Phonebook;
