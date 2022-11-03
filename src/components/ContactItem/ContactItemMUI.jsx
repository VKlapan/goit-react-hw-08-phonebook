import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

const ContactItemMUI = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          aria-label="comment"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} />
      <ListItemText primary={number} />
    </ListItem>
  );
};

export default ContactItemMUI;

ContactItemMUI.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
