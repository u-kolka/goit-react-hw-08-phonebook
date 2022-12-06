// import { useSelector } from "react-redux";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ContactForm from './ContactForm/ContactForm'
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
// import Wrapper from "./Wrapper/Wrapper";

// const App = () => {
//   const loading = useSelector(state => state.contacts.isLoading);
//   return (
//     <Wrapper>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {loading && <Loader></Loader>}
//       <ContactList />
//       <ToastContainer autoClose={3000} theme={"light"} icon={false} />
//     </Wrapper>
//   );
// }




import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './UserMenu/Layout';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { RestrictedRoute } from './UserMenu/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;