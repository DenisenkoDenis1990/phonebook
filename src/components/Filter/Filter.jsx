const Filter = ({ filter, onFilterInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        filter={filter}
        onChange={onFilterInput}
      ></input>
    </>
  );
};

export default Filter;
