import styles from "./Standings.module.css";
import { useState, useEffect } from "react";
import { getStanding } from "../../services/getServices";

const Standings = () => {
  const [standingData, setStandingData] = useState(null);
  useEffect(() => {
    const getStandingData = async () => {
      try {
        let data = await getStanding();
        setStandingData(data);
        console.log(data);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getStandingData();
  }, []);
  return (
    <>
      <p>Standings</p>
      <div className={styles.tableHeader}>Header</div>
      <div className={styles.singleRow}>
        <div className={styles.nameLogo}>
          1 -
          <img
            className={styles.logo}
            src="https://media.api-sports.io/football/teams/41.png"
          />
          Liverpool
        </div>
        <div className={styles.teamStats}>
          <div>
            {standingData?.response[0].league.standings[0][0].all.played}
          </div>
          <div>
            {standingData?.response[0].league.standings[0][0].goalsDiff}
          </div>
          <div>{standingData?.response[0].league.standings[0][0].points}</div>
        </div>
      </div>
      <pre>{JSON.stringify(standingData, null, 2)}</pre>
    </>
  );
};

export { Standings };
