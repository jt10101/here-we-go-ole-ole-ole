import { Standings } from "../../components/StandingsTable/Standings";
import { Fixtures } from "../../components/Fixtures/Fixtures";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Standings />
        <Fixtures />
      </div>
    </>
  );
};

export { Home };
