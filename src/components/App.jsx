import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from 'pages/SharedLayout/SharedLayout';
import ContactsListPage from 'pages/ContactsListPage/ContactsListPage';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { checkCurrent } from 'redux/authorization/authorizationOperations';
import { getIsCheckingCurrent } from 'redux/authorization/authorizationsSelectors';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isCheckingUser = useSelector(getIsCheckingCurrent);

  useEffect(() => {
    dispatch(checkCurrent());
  }, [dispatch]);

  return (
    <>
      {isCheckingUser ? (
        <p>Loading ...</p>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsListPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
