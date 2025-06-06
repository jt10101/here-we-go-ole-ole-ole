// CSS Module for this component specifically
import styles from "./PlayerDetails.module.css";

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
            <div className={styles.baseData}>Data here is generic</div>
            <div className={styles.positionData}>
              Data here is role specific
            </div>
          </div>
        </div>
        {/* <p>Age: {pdata?.player?.age}</p> */}
        {/* <p>Nationality: {pdata?.player?.nationality}</p> */}
        {/* <p>Height: {pdata?.player?.height}</p> */}
        {/* <p>Weight: {pdata?.player?.weight} </p> */}
        {/* <p>Team: {pdata?.statistics[0].team.name} </p> */}
        {/* <p>Position: {pdata?.statistics[0].games.position} </p> */}
        {/* <p>Appearances: {pdata?.statistics[0].games.appearences} </p> */}
      </section>
    </>
  );
};

export { PlayerDetails };
