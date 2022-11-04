import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import ContactsListPage from 'pages/ContactsListPage/ContactsListPage';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;