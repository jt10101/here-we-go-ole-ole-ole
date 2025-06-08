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
      <div className={styles.singleRow}>
        <div className={styles.nameLogo}>Logo and Name</div>
        <div className={styles.teamStats}>Stats</div>
      </div>
    </>
  );
};

export { Standings };
