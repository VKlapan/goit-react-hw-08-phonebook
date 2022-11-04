import { Box } from '@mui/material';

import UserLoginForm from 'components/UserLoginForm/UserLoginForm';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>LOGIN PAGE</h2>
      <UserLoginForm />
    </Box>
  );
};

export default LoginPage;
