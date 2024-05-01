import ContactForm from '../contactForm/ContactForm'
import SearchBox from '../searchBox/SearchBox'
import ContactList from '../contactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { selectIsLoading, selectError } from '../../redux/selectors'
import LoaderComponent from '../loader/Loader'
import ErrorMessage from '../error/ErrorMessage'
import './App.css'


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className='phonebook-container'>
       <h1>Phonebook</h1>
       <ContactForm/>
       <SearchBox/>
       {isLoading && <LoaderComponent/>}
       {error && <ErrorMessage/>}
       <ContactList/>
    </div>
  );
}

export default App