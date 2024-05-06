import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.scss';

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
    // Ваша логіка перевірки дійсності пароля
    return /^(?=.*[a-zA-Z])(?=.*\d).{5,}$/.test(value);
  })
});

export const RegisterForm = () => {
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
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
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
      <ErrorMessage name="name" component="p" className={css.error} />
    </div> 

    <div className={css["form-wrapper"]}>
      <label className={css.label} htmlFor={passwordFieldId}>Password</label>
      <Field className={css.field} type="password" name="password" id={passwordFieldId} placeholder='Enter your password...'/>
      <ErrorMessage name="name" component="p" className={css.error} />
    </div>

      <button className={css.btn} type="submit">Register</button>

    </Form>
  </Formik>
  );
};




// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
