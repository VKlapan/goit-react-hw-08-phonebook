import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { checkCurrent } from 'redux/authorization/authorizationOperations';
import { getIsCheckingCurrent } from 'redux/authorization/authorizationsSelectors';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const SharedLayout = lazy(() => import('pages/SharedLayout/SharedLayout'));
const ContactsListPage = lazy(() =>
  import('pages/ContactsListPage/ContactsListPage')
);
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

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
        <Suspense fallback={<p>...Load page</p>}>
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
        </Suspense>
      )}
    </>
  );
};

export default App;
