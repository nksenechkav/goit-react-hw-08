import Contact from "../contact/Contact";
import css from "./ContactList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from "../../redux/selectors";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;