import PropTypes from 'prop-types';
import { React } from 'react';

//import ContactItem from '../ContactItem/ContactItem';
import ContactItemMUI from 'components/ContactItem/ContactItemMUI';
import List from '@mui/material/List';

const ContactList = ({ contacts }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {contacts.map(contact => (
        <ContactItemMUI key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
