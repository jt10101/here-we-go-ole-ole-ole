const Attacker = ({ pdata, styles }) => {
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
      <div className={styles.positionName}>Attack</div>

      <div className={styles.stats}>
        <div>Goals</div>
        <div>
          <strong>{pdata?.statistics[0].goals.total}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Goals per game</div>
        <div>
          <strong>{goalperGame.toFixed(2)}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Shots</div>
        <div>
          <strong>{shotsTotal}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Shots on target</div>
        <div>
          <strong>{shotsOn}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Shots accuracy %</div>
        <div>
          <strong>{shotsAccuracy.toFixed(0)}%</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Assists</div>
        <div>
          <strong>{pdata?.statistics[0].goals.assists}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Duels Total</div>
        <div>
          <strong>{pdata?.statistics[0].duels.total}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Duels Won</div>
        <div>
          <strong>{pdata?.statistics[0].duels.won}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Dribbles</div>
        <div>
          <strong>{pdata?.statistics[0].dribbles.attempts}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Dribble Success</div>
        <div>
          <strong>{pdata?.statistics[0].dribbles.success}</strong>
        </div>
      </div>
    </>
  );
};

export { Attacker };
