import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { ContactListNavigation } from './ContactsListPage.styled';

import * as contactsOperations from 'redux/contacts/contactsOperations';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';
import AddContactForm from 'components/ContactForm/AddContactForm';

const ContactsListPage = () => {
  const styleDefault = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#010101',
    width: 'auto',
    padding: '20px',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div style={styleDefault}>
      <ContactListNavigation>
        <AddContactForm />
        <Filter />
      </ContactListNavigation>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>Oops, something went wrong. Error is: "{error}"</p>}
      {!isLoading && contacts.length > 0 && (
        <ContactList contacts={visibleContacts} />
      )}
    </div>
  );
};

export default ContactsListPage;
