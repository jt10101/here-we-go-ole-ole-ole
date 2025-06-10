const BaseDetails = ({ pdata, styles }) => {
  return (
    <>
      <div className={styles.baseDetails}>Base Details</div>

      <div className={styles.stats}>
        <div>Full Name</div>
        <div>
          <strong>
            {pdata?.player.name} {pdata?.player.lastname}
          </strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Age</div>
        <div>
          <strong>{pdata?.player.age}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>D.O.B</div>
        <div>
          <strong>{pdata?.player.birth.date}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Nationality</div>
        <div>
          <strong>{pdata?.player.nationality}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Height</div>
        <div>
          <strong>{pdata?.player.height}</strong>
        </div>
      </div>

      <div className={styles.stats}>
        <div>Weight</div>
        <div>
          <strong>{pdata?.player.weight}</strong>
        </div>
      </div>
    </>
  );
};

export { BaseDetails };
