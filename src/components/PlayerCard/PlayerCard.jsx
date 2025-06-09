import { useNavigate } from "react-router";
import styles from "./PlayerCard.module.css";

export const PlayerCard = ({ player }) => {
  const navigate = useNavigate();
  if (!player) {
    return null;
  }
  const { name, firstname, lastname, photo, nationality, age, id } =
    player.player;
  const teamName = player.statistics[0]?.team?.name;
  const position = player.statistics[0]?.games?.position;
  const handleSelect = (event) => {
    let selectedPlayerID = event.target.name;
    navigate(`/players/${selectedPlayerID}`);
  };

  return (
    <div className={styles.playercard}>
      <div className={styles.playerimagecontainer}>
        {photo ? (
          <img
            src={photo}
            alt={`${firstname} ${lastname}`}
            className={styles.playerphoto}
            name={id}
            onClick={handleSelect}
          />
        ) : (
          <div className={styles.nophotoplaceholder}>No Photo Available</div>
        )}
      </div>
      <div className={styles.playerdetails}>
        <h3 className={styles.playername}>
          {name || `${firstname} ${lastname}`}
        </h3>
        <p className={styles.playernationality}>{nationality}</p>
        {teamName && <p className={styles.playerclub}>{teamName}</p>}
        {position && <p className={styles.playerposition}>{position}</p>}
        {age && <p className={styles.playerage}>{age}</p>}
      </div>
    </div>
  );
};
