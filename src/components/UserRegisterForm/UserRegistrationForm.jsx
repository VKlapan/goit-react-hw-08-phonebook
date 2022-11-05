import * as React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/authorization/authorizationOperations';

export default function UserRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormControl fullWidth required variant="filled">
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input
          id="name-input"
          name="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
          required
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth required variant="filled">
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input
          id="email-input"
          name="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth required variant="filled">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input
          id="password-input"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          placeholder="Enter password"
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
      </FormControl>
      <Button onClick={handleSubmit}>Register</Button>
    </Box>
  );
}
