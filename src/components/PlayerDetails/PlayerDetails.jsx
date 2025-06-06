// CSS Module for this component specifically
import styles from "./PlayerDetails.module.css";
import { PositionDetails } from "./PositionDetails";

const PlayerDetails = ({ pdata }) => {
  return (
    <>
      <section className={styles.playerDetails}>
        <div className={styles.playerName}>
          <div>
            <b>{pdata?.player?.name}</b>
          </div>
          <img
            className={styles.teamlogo}
            src={pdata?.statistics[0].team.logo}
          />
        </div>
        <div className={styles.playerContent}>
          <div>
            <img className={styles.playerPhoto} src={pdata?.player?.photo} />
          </div>
          <div className={styles.contentContainers}>
            <div className={styles.baseData}>
              <ul>
                <b>Base Details</b>
                <li>Nationality: {pdata?.player?.nationality}</li>
                <li>Age: {pdata?.player?.age}</li>
                <li>Height: {pdata?.player?.height}</li>
                <li>Weight: {pdata?.player?.weight}</li>
              </ul>
            </div>
            <div className={styles.positionData}>
              <PositionDetails />
            </div>
          </div>
        </div>
        {/* <p></p> */}
        {/* <p></p> */}

        {/* <p></p>
        {/* <p>Team: {pdata?.statistics[0].team.name} </p> */}
        {/* <p>Position: {pdata?.statistics[0].games.position} </p> */}
        {/* <p>Appearances: {pdata?.statistics[0].games.appearences} </p> */}
      </section>
    </>
  );
};

export { PlayerDetails };
