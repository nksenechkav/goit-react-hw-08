import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { ContactList } from '../../components/contactList/ContactList';
import { Contact } from '../../components/contact/Contact';
import { fetchTasks } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <Contact />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
