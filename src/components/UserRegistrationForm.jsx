import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

export default function UserRegistrationForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        console.log('incorrect input name');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if (contacts.find(contact => contact.name === name)) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mr: 1,
        alignItems: 'center',
      }}
    >
      <TextField
        label="Name"
        name="name"
        variant="filled"
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        required
      />
      <TextField
        label="eMail"
        name="email"
        variant="filled"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
        required
      />
      <FilledInput
        label="Password"
        name="password"
        variant="filled"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button onClick={handleSubmit}>Register</Button>
    </Box>
  );
}
