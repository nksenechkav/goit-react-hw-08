import css from './ContactForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from 'react';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string() .trim()
  .matches(/^[A-Za-z\s]+$/, 'Must contain only letters')
  .required("Required")
  .test('is-valid-name', 'Must be in the format "First Name and Last Name"', function (value) {
    return /^[A-Za-z]+\s[A-Za-z]+$/.test(value);
  }),

  number: Yup.string()
  .trim()
  .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in the format "000-00-00"')
  .required("Required")
  .test('is-valid-number', 'Must be a valid phone number!', function (value) {
    return /^\d{3}-\d{2}-\d{2}$/.test(value);
  })
});


const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextContact = {
      ...values,
      name: values.name.trim(),
      number: values.number.trim(),
    }

    dispatch(addContact(nextContact));
		actions.resetForm();
	};

  return (
  
  <Formik initialValues={{
    id: "",
    name: "",
    number: ""
  }} 
  onSubmit={handleSubmit}
  validationSchema={FeedbackSchema}
  >
      <Form className={css.form}>
        <div className={css["form-wrapper"]}>
        <label className={css.label} htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} placeholder='Enter last name and first name...'/>
        <ErrorMessage name="name" component="p" className={css.error} />
        </div>

        <div className={css["form-wrapper"]}>
        <label className={css.label} htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} placeholder='Enter phone number...'/>
        <ErrorMessage name="number" component="p" className={css.error} />
        </div>
       
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
  </Formik>
  );
}
export default ContactForm;