import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchDisplay } from "../../components/SearchDisplay/SearchDisplay";

const SearchPage = ({ handleChange, handleSubmit, returnResult }) => {
  return (
    <>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <SearchDisplay returnResult={returnResult} />
    </>
  );
};

export { SearchPage };
