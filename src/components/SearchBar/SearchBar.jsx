const SearchBar = (props) => {
  return (
    <>
      <h1>Search Bar</h1>
      <input name="search" type="search" onChange={props.handleChange}></input>
      <button name="searchsubmit" onClick={props.handleSubmit}>
        Submit
      </button>
    </>
  );
};

export { SearchBar };
