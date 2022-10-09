import css from '../Filter/Filter.module.css';
const Filter = ({ filter, onFilterInput }) => {
  return (
    <input
      className={css.filterInput}
      name="filter"
      type="text"
      filter={filter}
      onChange={onFilterInput}
    ></input>
  );
};

export default Filter;
