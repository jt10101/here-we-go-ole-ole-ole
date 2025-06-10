import { useNavigate } from "react-router";
import styles from "./PlayerCard.module.css";

export const PlayerCard = ({ player }) => {
  const navigate = useNavigate();
  if (!player) {
    return null;
  }
  const { name, firstname, lastname, photo, id } = player.player;
  const { logo } = player.statistics[0].team;
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
      <div className={styles.teamlogocontainer}>
        <img src={logo} className={styles.teamLogo} alt={"test"} />
      </div>
      <div className={styles.playerdetails}>
        <h3 className={styles.playername}>
          {name || `${firstname} ${lastname}`}
        </h3>
        {position && <p className={styles.playerposition}>{position}</p>}
      </div>
    </div>
  );
};
