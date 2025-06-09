const Goalkeeper = ({ pdata, styles }) => {
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
