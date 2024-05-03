import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
  <div className='phonebook-container'>
  <h1>Phonebook</h1>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      </Routes>
    </Layout>
  </div>
);
};

export default App


// import ContactForm from '../contactForm/ContactForm'
// import SearchBox from '../searchBox/SearchBox'
// import ContactList from '../contactList/ContactList'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchContacts } from '../../redux/contactsOps'
// import { selectIsLoading, selectError } from '../../redux/selectors'
// import LoaderComponent from '../loader/Loader'
// import ErrorMessage from '../error/ErrorMessage'
// import './App.css'


// function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);


//   return (
//     <div className='phonebook-container'>
//        <h1>Phonebook</h1>
//        <ContactForm/>
//        <SearchBox/>
//        {isLoading && <LoaderComponent/>}
//        {error && <ErrorMessage/>}
//        <ContactList/>
//     </div>
//   );
// }

// export default App