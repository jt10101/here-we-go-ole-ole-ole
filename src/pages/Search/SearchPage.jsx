import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchDisplay } from "../../components/SearchDisplay/SearchDisplay";
import { ClubBar } from "../../components/ClubBar/ClubBar";

const SearchPage = ({
  handleChange,
  handleSubmit,
  handleSelect,
  returnResult,
  handleClickTeam,
}) => {
  return (
    <div>
      <ClubBar handleClickTeam={handleClickTeam} />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <SearchDisplay returnResult={returnResult} handleSelect={handleSelect} />
    </div>
  );
};

export { SearchPage };
