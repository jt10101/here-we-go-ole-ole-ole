// src/App.jsx

// Pages
import { SearchPage } from "./pages/Search/searchPage";
import { DetailedPage } from "./pages/DetailedPage/DetailedPage";
// Components
import { NavBar } from "./components/NavBar/NavBar";
// Services
import { getPlayers } from "./services/getServices";
// React related libraries
import { useState } from "react";
import { Route, Routes } from "react-router";
// CSS file
import "./App.css";

const App = () => {
  // States
  const [searchPlayer, setSearchPlayer] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [returnResult, setReturnResult] = useState([]);

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
    return data;
    // console.log(refdata[0].player.name);
  };

  const handleSelect = async () => {
    console.log("test");
  };

  // JSX
  return (
    <>
      <main>
        <section className="header">
          <img src="" />
          <NavBar />
        </section>
        {/* Body is all elements below the header */}
        <section className="body">
          <section className="content">
            <Routes>
              <Route
                path="/players"
                element={
                  <SearchPage
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleSelect={handleSelect}
                    returnResult={returnResult}
                  />
                }
              />
              <Route
                path="/players/:id"
                element={<DetailedPage returnResult={returnResult} />}
              />
            </Routes>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
