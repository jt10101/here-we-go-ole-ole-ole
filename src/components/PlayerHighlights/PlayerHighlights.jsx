const PlayerHighlights = ({ pdata, styles }) => {
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
          <div className={styles.boxCategory}>Wins</div>
          <div className={styles.boxData}>XYZ</div>
        </div>
        <div className={styles.boxHighlight}>
          <div className={styles.boxCategory}>Losses</div>
          <div className={styles.boxData}>XYZ</div>
        </div>
      </div>
    </>
  );
};
export { PlayerHighlights };
