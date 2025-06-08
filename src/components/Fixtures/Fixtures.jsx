import styles from "./Fixtures.module.css";
import { useState, useEffect } from "react";
import { getFixtures } from "../../services/getServices";

const Fixtures = () => {
  const [fixturesData, setFixturesData] = useState(null);
  useEffect(() => {
    const getFixturesData = async () => {
      try {
        let data = await getFixtures();
        setFixturesData(data);
        if (data && data.response && Array.isArray(data.response)) {
          setFixturesData(data.response);
        } else {
          console.error("error:", data);
          setFixturesData([]);
        }
      } catch (error) {
        console.error("error:", error);
        setFixturesData([]);
      }
    };
    getFixturesData();
  }, []);

  return (
    <div className={styles.fixturesTable}>
      <div>
        <strong>Fixtures</strong>
      </div>
      <div className={styles.fixtures}>
        {fixturesData && fixturesData.length > 0 ? (
          fixturesData.map((game) => (
            <div className={styles.fixtureContainer}>
              {/* Home Team Details */}
              <div className={styles.teamFixtureDetails}>
                <p>
                  <strong>{game.teams.home.name}</strong>
                </p>
                <img className={styles.teamlogo} src={game.teams.home.logo} />
              </div>

              {/* General Match Details */}
              <div className={styles.fixtureGeneralDetails}>
                <div>{game.score.fulltime.home} </div>
                <div>:</div>
                <div>{game.score.fulltime.away}</div>
              </div>

              {/* Away Team Details */}
              <div className={styles.teamFixtureDetails}>
                <p>
                  <strong>{game.teams.away.name}</strong>
                </p>
                <img className={styles.teamlogo} src={game.teams.away.logo} />
              </div>
            </div>
          ))
        ) : fixturesData === null ? (
          <p>Loading fixtures...</p>
        ) : (
          <p>No fixtures data available.</p>
        )}
        {/* <pre>{JSON.stringify(fixturesData, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export { Fixtures };
