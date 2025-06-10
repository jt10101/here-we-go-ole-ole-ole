import { Standings } from "../../components/StandingsTable/Standings";
import { Fixtures } from "../../components/Fixtures/Fixtures";
import { News } from "../../components/News/News";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Standings />
        <Fixtures />
        <News />
      </div>
    </>
  );
};

export { Home };
