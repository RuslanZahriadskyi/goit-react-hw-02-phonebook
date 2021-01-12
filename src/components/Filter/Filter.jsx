function Filter({ handlerFilter, filterValue }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handlerFilter}
      ></input>
    </>
  );
}

export default Filter;
