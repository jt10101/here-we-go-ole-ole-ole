// CSS Module for this component specifically
import styles from "./PlayerDetails.module.css";
import { PositionDetails } from "../PositionDetails/PositionDetails";

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
            <div className={styles.playerHighlights}>
              <div className={styles.boxHighlight}>
                <div className={styles.boxCategory}>Appearances</div>
                <div className={styles.boxData}>
                  {pdata?.statistics[0].games.appearences}
                </div>
              </div>
              <div className={styles.boxHighlight}>
                <div className={styles.boxCategory}>Goals</div>
                <div className={styles.boxData}>
                  {pdata?.statistics[0].goals.total}
                </div>
              </div>
              <div className={styles.boxHighlight}>
                <div className={styles.boxCategory}>Wins</div>
                <div className={styles.boxData}>XYZ</div>
              </div>
              <div className={styles.boxHighlight}>
                <div className={styles.boxCategory}>Losses</div>
                <div className={styles.boxData}>XYZ</div>
              </div>
            </div>
            <div className={styles.allData}>
              <div className={styles.positionData}>
                <PositionDetails styles={styles} pdata={pdata} />
              </div>
              <div className={styles.baseData}>
                <ul>
                  <b>Base Details</b>
                  <li>Nationality: {pdata?.player?.nationality}</li>
                  <li>Age: {pdata?.player?.age}</li>
                  <li>Height: {pdata?.player?.height}</li>
                  <li>Weight: {pdata?.player?.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { PlayerDetails };
