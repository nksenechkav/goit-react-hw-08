import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from '../../components/contactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
import ContactForm from '../../components/contactForm/ContactForm';
import SearchBox from '../../components/searchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox/>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      <ContactList />
    </>
  );
}
