const SearchBar = (props) => {
  return (
    <>
      <input name="search" type="search" onChange={props.handleChange}></input>
      <button name="searchsubmit" onClick={props.handleSubmit}>
        Submit
      </button>
    </>
  );
};

export { SearchBar };
