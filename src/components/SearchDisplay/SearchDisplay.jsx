import { PlayerCard } from "../PlayerCard/PlayerCard";
import styles from "./SearchDisplay.module.css";

const SearchDisplay = ({ returnResult, handleSelect }) => {
  return (
    <div className={styles.searchdisplay}>
      {returnResult?.length > 0 ? (
        returnResult?.map((playerData) => (
          <PlayerCard
            key={playerData.player.id}
            player={playerData}
            handleSelect={handleSelect}
          />
        ))
      ) : (
        <div>No results found. Try searching for a player!</div>
      )}
    </div>
  );
};

export { SearchDisplay };
