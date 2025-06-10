const PlayerHighlights = ({ pdata, styles }) => {
  let role = pdata?.statistics[0].games.position;
  let renderrole;
  if (role === "Attacker") renderrole = "FW";
  if (role === "Midfielder") renderrole = "MF";
  if (role === "Defender") renderrole = "DF";
  if (role === "Goalkeeper") renderrole = "GK";

  return (
    <>
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
          <div className={styles.boxCategory}>Appearances</div>
          <div className={styles.boxData}>
            {pdata?.statistics[0].games.appearences}
          </div>
        </div>
        <div className={styles.boxHighlight}>
          <div className={styles.boxCategory}>Position</div>
          <div className={styles.boxData}>{renderrole}</div>
        </div>
      </div>
    </>
  );
};
export { PlayerHighlights };
