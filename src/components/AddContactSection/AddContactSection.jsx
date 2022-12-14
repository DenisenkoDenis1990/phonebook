import css from '../AddContactSection/AddContactSection.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoMdAdd } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import * as yup from 'yup';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useAddContactMutation } from 'redux/contactsApi';
const shortid = require('shortid');

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .max(50, 'Name is too long')
    .min(2, 'Name is too short'),
  phone: yup
    .string()
    .required()
    .trim()
    .max(13, 'Enter valid number like XXX-XXX-XXXX')
    .min(10, 'Number is too short'),
});

const AddContactSection = ({ onCloseModal }) => {
  const nameInputId = shortid();
  const phoneInputId = shortid();
  const { data } = useGetContactsQuery();

  const [addContact, result] = useAddContactMutation();
  console.log(result);

  const handleSubmit = async ({ name, phone }) => {
    let isInclude = false;
    data.forEach(contact => {
      if (contact.name === name || contact.phone === phone) {
        toast.error('This Name or Phone is already exist', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        isInclude = true;
        return;
      }
    });

    if (isInclude) {
      return;
    }

    await addContact({ name, phone });
    toast.success('Contact Added!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    onCloseModal();
  };

  return (
    <div className={css.formWrapper}>
      <button className={css.modalCloseButton} onClick={onCloseModal}>
        <IoMdClose className={css.modalCloseButtonIcon}></IoMdClose>
      </button>

      <h2 className={css.formTitle}>Add Contact</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', phone: '' }}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor={nameInputId} className={css.formLabel}>
            Name
            <Field
              type="text"
              name="name"
              id={nameInputId}
              placeholder="Enter contact name..."
              className={css.formInput}
            ></Field>
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor={phoneInputId} className={css.formLabel}>
            Number
            <Field
              type="tel"
              name="phone"
              pattern="[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}"
              placeholder="XXX-XXX-XXXX"
              className={css.formInput}
            ></Field>
            <ErrorMessage name="phone" component="div" />
          </label>
          <button type="submit" className={css.formButton}>
            <IoMdAdd className={css.addContactButtonIcon} /> Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddContactSection;
