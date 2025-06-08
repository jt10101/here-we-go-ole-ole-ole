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
    <>
      <div className={styles.fixturesTable}>
        <div>
          <strong>Fixtures</strong>
          <pre>{JSON.stringify(fixturesData, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export { Fixtures };
