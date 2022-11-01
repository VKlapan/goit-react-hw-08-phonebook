import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Header } from './AppHeader.styled';

const preventDefault = event => event.preventDefault();

const AppHeader = () => {
  return (
    <Header>
      <div>LOGO</div>
      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#">Home</Link>
        <Link href="#">Contacts</Link>
        <Link href="#">About</Link>
      </Box>
      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#">Registration</Link>
        <Link href="#">Login</Link>
      </Box>
    </Header>
  );
};

export default AppHeader;
