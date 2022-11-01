import AppHeaderBar from 'components/AppBar/AppHeaderBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <AppHeaderBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
