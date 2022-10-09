import { useState } from 'react';
import css from '../AddContactSection/AddContactSection.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoMdAdd } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import * as yup from 'yup';
const shortid = require('shortid');

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .max(50, 'Name is too long')
    .min(2, 'Name is too short'),
  number: yup
    .string()
    .required()
    .trim()
    .max(13, 'Enter valid number like +380XXXXXXXXX')
    .min(13, 'Number is too short'),
});

const AddContactSection = ({ onSubmit, onCloseModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid();
  const phoneInputId = shortid();

  const onInputHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = ({ name, number }, actions) => {
    if (name === '' || number === '') {
      toast.error(`Name or Number is empty.`);
      return;
    }
    const contact = {
      name,
      number,
      id: shortid(),
    };
    onSubmit(contact);
    setNumber('');
    setName('');
  };

  return (
    <div className={css.formWrapper}>
      <button className={css.modalCloseButton} onClick={onCloseModal}>
        <IoMdClose className={css.modalCloseButtonIcon}></IoMdClose>
      </button>

      <h2 className={css.formTitle}>Add Contact</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor={nameInputId} className={css.formLabel}>
            Name
            <Field
              type="text"
              name="name"
              value={name}
              id={nameInputId}
              onInput={onInputHandler}
              placeholder="Enter contact name..."
              className={css.formInput}
            ></Field>
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor={phoneInputId} className={css.formLabel}>
            Number
            <Field
              type="tel"
              name="number"
              value={number}
              onInput={onInputHandler}
              pattern="[+]{1}[3][8][0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="+380XXXXXXXXX"
              className={css.formInput}
            ></Field>
            <ErrorMessage name="number" component="div" />
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
