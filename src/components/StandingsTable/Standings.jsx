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
        if (
          data &&
          data.response &&
          data.response[0] &&
          data.response[0].league &&
          data.response[0].league.standings &&
          Array.isArray(data.response[0].league.standings[0])
        ) {
          setStandingData(data.response[0].league.standings[0]);
        } else {
          console.error("error:", data);
          setStandingData([]);
        }
      } catch (error) {
        console.error("error:", error);
        setStandingData([]);
      }
    };
    getStandingData();
  }, []);
  return (
    <>
      <div className={styles.standingsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.header}>
            <strong>Premier League 24/25</strong>
          </div>
          <div className={styles.headerDetails}>
            <div>PL</div>
            <div>GD</div>
            <div>PT</div>
          </div>
        </div>
        {standingData && standingData.length > 0 ? (
          standingData.map((team) => (
            <div className={styles.singleRow} key={team.team.id}>
              <div className={styles.nameLogo}>
                <div className={styles.rank}>{team.rank}</div>
                <div>•</div>
                <div>
                  <img
                    className={styles.logo}
                    src={team.team.logo}
                    alt={team.team.name}
                  />
                </div>
                {team.team.name}
              </div>
              <div className={styles.teamStats}>
                <div>{team.all.played}</div>
                <div>{team.goalsDiff}</div>
                <div>{team.points}</div>
              </div>
            </div>
          ))
        ) : standingData === null ? (
          <p>Loading standings...</p>
        ) : (
          <p>No standings data available.</p>
        )}
      </div>
      {/* <pre>{JSON.stringify(standingData, null, 2)}</pre> */}
    </>
  );
};

export { Standings };
