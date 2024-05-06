import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import css from './RegistrationForm.module.scss';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().trim()
  .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'Invalid email address')
  .required("Required")
  .test('is-valid-email', 'Enter a valid email address', function (value) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value);
  }),

  password: Yup.string().trim()
  .matches(/^(?=.*[a-zA-Z])(?=.*\d).{5,}$/, 'Password must contain at least one letter, one digit, and be at least 5 characters long')
  .required("Required")
  .test('is-valid-password', 'Must be a valid password!', function (value) {
    return /^(?=.*[a-zA-Z])(?=.*\d).{5,}$/.test(value);
  })
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {

    dispatch(
      register({
        name: values.email,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Registration success. Congratulations!');
      })
      .catch(() => {
        toast.error('Registration failed. Please check your credentials!');
      });
      actions.resetForm();
  };

  return (
  <Formik initialValues={{
      id: "",
      name: "",
      email: "",
      password: ""
    }} 
    onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}
    >
    <Form className={css.form} autoComplete="off">
    <div className={css["form-wrapper"]}>
        <label className={css.label} htmlFor={nameFieldId}>Username</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} placeholder='Enter your name...'/>
        <ErrorMessage name="name" component="p" className={css.error} />
        </div>

    <div className={css["form-wrapper"]}>
      <label className={css.label} htmlFor={emailFieldId}>Email</label>
      <Field className={css.field} type="email" name="email" id={emailFieldId} placeholder='Enter your email...'/>
      <ErrorMessage name="email" component="p" className={css.error} />
    </div> 

    <div className={css["form-wrapper"]}>
      <label className={css.label} htmlFor={passwordFieldId}>Password</label>
      <Field className={css.field} type="password" name="password" id={passwordFieldId} placeholder='Enter your password...'/>
      <ErrorMessage name="password" component="p" className={css.error} />
    </div>

      <button className={css.btn} type="submit">Register</button>
      <Toaster />
    </Form>
  </Formik>
  );
};