import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/actions';
const Filter = () => {
  //const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onFilterInputHandler = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };
  return (
    <input
      className={css.filterInput}
      name="filter"
      type="text"
      //filter={filter}
      onChange={onFilterInputHandler}
    ></input>
  );
};

export default Filter;
