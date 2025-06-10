import styles from "./SearchBar.module.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <fieldset className={styles.searchbarContainer}>
        <legend>Search by Player Name</legend>
        <div className={styles.searchbar}>
          <input
            className={styles.searchbarInput}
            name="search"
            type="search"
            onChange={handleChange}
          ></input>
          <button
            className={styles.submitButton}
            name="searchsubmit"
            onClick={handleSubmit}
          >
            SEARCH
          </button>
        </div>
      </fieldset>
    </>
  );
};

export { SearchBar };
