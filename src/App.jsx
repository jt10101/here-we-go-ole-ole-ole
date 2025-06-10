// Pages
import { SearchPage } from "./pages/Search/SearchPage";
import { DetailedPage } from "./pages/DetailedPage/DetailedPage";
import { Home } from "./pages/Home/Home";
// Components
import { NavBar } from "./components/NavBar/NavBar";
// Services
import { getPlayers, getPlayerByTeam } from "./services/getServices";
import { getAirtable } from "./services/airtableServices";
// React related libraries
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
// CSS file
import "./App.css";

const App = () => {
  // States
  const [searchPlayer, setSearchPlayer] = useState();
  const [returnResult, setReturnResult] = useState([]); // This is the state that holds the display results on the search page
  const [favPlayers, setFavPlayers] = useState([]);

  // JS Functions
  const handleChange = (event) => {
    let player = event.target.value;
    setSearchPlayer(player);
  };

  const handleSubmit = async () => {
    let data = await getPlayers(searchPlayer);
    let refdata = [];
    refdata = data.response;
    setReturnResult(refdata);
    console.log(refdata);
  };

  const handleClickTeam = async (event) => {
    let teamId = event.target.name;
    let data = await getPlayerByTeam(teamId);
    setReturnResult(data);
    console.log(data);
  };

  useEffect(() => {
    const getFavs = async () => {
      try {
        const data = await getAirtable();
        const datamod = data.records;
        setFavPlayers(datamod);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getFavs();
  }, []);

  const renderFavs = async () => {
    try {
      const data = await getAirtable();
      const datamod = data.records;
      setFavPlayers(datamod);
    } catch (Error) {
      console.error("Error fetching data", Error);
    }
  };

  // JSX
  return (
    <>
      <main>
        <section className="header">
          <img className="logo" src="https://i.imgur.com/GWmeX74.png" />
          <NavBar getAirtable={getAirtable} favPlayers={favPlayers} />
        </section>
        {/* Body comprises of all elements below the header */}
        <section className="body">
          <section className="content">
            <Routes>
              <Route path="" element={<Home />} />
              <Route
                path="/players"
                element={
                  <SearchPage
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    returnResult={returnResult}
                    handleClickTeam={handleClickTeam}
                  />
                }
              />
              <Route
                path="/players/:playerID"
                element={<DetailedPage renderFavs={renderFavs} />}
              />
            </Routes>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
