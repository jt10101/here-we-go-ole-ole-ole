import { PlayerCard } from "../PlayerCard/PlayerCard";

const SearchDisplay = ({ returnResult, handleSelect }) => {
  return (
    <div className="searchdisplay">
      {returnResult.length > 0 ? (
        returnResult.map((playerData) => (
          <PlayerCard
            key={playerData.player.id}
            player={playerData}
            handleSelect={handleSelect}
          />
        ))
      ) : (
        <p>No results found. Try searching for a player!</p>
      )}
    </div>
  );
};

export { SearchDisplay };
