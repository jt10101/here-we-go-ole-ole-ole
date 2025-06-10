// CSS Module for this component specifically
import styles from "./PlayerDetails.module.css";
import { PlayerHighlights } from "../PlayerHighlights/PlayerHighlights";
import { PositionDetails } from "../PositionDetails/PositionDetails";
import { BaseDetails } from "../BaseDetails/BaseDetails";

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
            <PlayerHighlights pdata={pdata} styles={styles} />
            <div className={styles.allData}>
              <div className={styles.positionData}>
                <PositionDetails styles={styles} pdata={pdata} />
              </div>
              <div className={styles.baseData}>
                <div>
                  <BaseDetails pdata={pdata} styles={styles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { PlayerDetails };
