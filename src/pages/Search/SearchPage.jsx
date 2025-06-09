import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchDisplay } from "../../components/SearchDisplay/SearchDisplay";
import { ClubBar } from "../../components/ClubBar/ClubBar";
const SearchPage = ({
  handleChange,
  handleSubmit,
  handleSelect,
  returnResult,
}) => {
  return (
    <div>
      <ClubBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <SearchDisplay returnResult={returnResult} handleSelect={handleSelect} />
    </div>
  );
};

export { SearchPage };
