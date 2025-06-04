import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchDisplay } from "../../components/SearchDisplay/SearchDisplay";

const SearchPage = ({
  handleChange,
  handleSubmit,
  handleSelect,
  returnResult,
}) => {
  return (
    <>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <SearchDisplay returnResult={returnResult} handleSelect={handleSelect} />
    </>
  );
};

export { SearchPage };
