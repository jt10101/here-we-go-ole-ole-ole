import { PlayerCard } from "../PlayerCard/PlayerCard";

export const SearchDisplay = ({ returnResult }) => {
  return (
    <div className="searchdisplay">
      {returnResult.length > 0 ? (
        returnResult.map((playerData) => (
          <PlayerCard key={playerData.player.id} player={playerData} />
        ))
      ) : (
        <p>No results found. Try searching for a player!</p>
      )}
    </div>
  );
};
