const Goalkeeper = ({ pdata, styles }) => {
  const shotsOn = pdata?.statistics[0].shots.on;
  const shotsTotal = pdata?.statistics[0].shots.total;
  let shotsAccuracy = 0;
  if (shotsOn === 0 || shotsTotal === 0) {
    return 0;
  }
  shotsAccuracy = Math.round((shotsOn / shotsTotal) * 100);

  let goalperGame = 0;
  if (
    pdata?.statistics[0].goals.total === 0 ||
    pdata?.statistics[0].games.appearences === 0
  ) {
    goalperGame = 0;
  }
  goalperGame =
    pdata?.statistics[0].goals.total / pdata?.statistics[0].games.appearences;

  return (
    <>
      <div className={styles.positionName}>Goalkeeping</div>

      <div className={styles.stats}>
        <div>Goals Saved</div>
        <div>
          <strong>{pdata?.statistics[0].goals.saves}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Penalities Saved</div>
        <div>
          <strong>{pdata?.statistics[0].penalty.saved}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Goals Conceded</div>
        <div>
          <strong>{pdata?.statistics[0].goals.conceded}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Passes</div>
        <div>
          <strong>{pdata?.statistics[0].passes.total}</strong>
        </div>
      </div>
    </>
  );
};

export { Goalkeeper };
