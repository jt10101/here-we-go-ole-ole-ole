const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <div className="searchbar">
        <input name="search" type="search" onChange={handleChange}></input>
        <button name="searchsubmit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export { SearchBar };
