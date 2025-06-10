import styles from "./News.module.css";
const News = () => {
  return (
    <>
      <div className={styles.newsAll}>
        <div className={styles.newsContainerTitle}>
          <strong>News</strong>
        </div>
        <a href="">
          <div className={styles.newsContainer}>
            <div className={styles.newsImageContainer}>
              <img
                className={styles.newsImage}
                src="https://resources.premierleague.pulselive.com/photo-resources/2025/06/10/2e13c066-50c4-4f3b-8571-4a4e3123ed7f/V2-Frimpong-Ait-Nouri-Delap.png?width=1284&height=724"
              />
            </div>
            <div className={styles.newsTitle}>
              Why does the transfer window shut today and then reopen?
            </div>
          </div>
        </a>

        <a href="">
          <div className={styles.newsContainer}>
            <div className={styles.newsImageContainer}>
              <img
                className={styles.newsImage}
                src="https://resources.premierleague.pulselive.com/photo-resources/2025/06/09/807455f8-27ef-4e20-b13a-b38ee180c4c7/Guardiola-Ait-Nouri.png?width=902&height=536"
              />
            </div>
            <div className={styles.newsTitle}>
              Analysis: Will Ait-Nouri signing signal Guardiola evolution?
            </div>
          </div>
        </a>

        <a href="">
          <div className={styles.newsContainer}>
            <div className={styles.newsImageContainer}>
              <img
                className={styles.newsImage}
                src="https://resources.premierleague.pulselive.com/photo-resources/2025/06/09/f618ffc5-34d7-4c0e-b3c8-5abaab98e130/Bloom.jpg?width=902&height=536"
              />
            </div>
            <div className={styles.newsTitle}>
              Who are the standout names leaving Premier League clubs this
              summer?
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export { News };
