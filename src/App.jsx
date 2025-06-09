// src/App.jsx

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
import { useState } from "react";
import { Route, Routes } from "react-router";
// CSS file
import "./App.css";

const App = () => {
  // States
  const [searchPlayer, setSearchPlayer] = useState();
  // const [selectedPlayerID, setSelectedPlayerID] = useState({});
  const [returnResult, setReturnResult] = useState([]); // This is the state that holds the display results on the search page

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
    // console.log(refdata);
    // return refdata;
    // console.log(refdata[0].player.name);
  };

  const handleClickTeam = async (event) => {
    let teamId = event.target.name;
    let data = await getPlayerByTeam(teamId);
    setReturnResult(data);
    console.log(data);
  };

  // JSX
  return (
    <>
      <main>
        <section className="header">
          <img className="logo" src="https://i.imgur.com/2UEwZLK.png" />
          <NavBar getAirtable={getAirtable} />
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
                    // handleSelect={handleSelect}
                    returnResult={returnResult}
                    handleClickTeam={handleClickTeam}
                  />
                }
              />
              <Route path="/players/:playerID" element={<DetailedPage />} />
            </Routes>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
