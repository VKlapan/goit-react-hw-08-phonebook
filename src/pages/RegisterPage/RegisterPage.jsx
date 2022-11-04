import { Box } from '@mui/material';

import UserRegistrationForm from 'components/UserRegistrationForm';

const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mr: 1,
        alignItems: 'center',
      }}
    >
      <h2>REGISTER PAGE</h2>
      <UserRegistrationForm />
    </Box>
  );
};

export default RegisterPage;
