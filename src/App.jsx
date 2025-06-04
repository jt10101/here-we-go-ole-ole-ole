// src/App.jsx

// Pages
import { SearchPage } from "./pages/Search/searchPage";
// Components
import { NavBar } from "./components/NavBar/NavBar";
import { BannerNews } from "./components/BannerNews/BannerNews";
import { FavList } from "./components/FavList/FavList";
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
    // let data = searchdata.response;
    console.log(refdata);
    console.log(refdata[0].player.name);
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
                    returnResult={returnResult}
                  />
                }
              />
            </Routes>
            {/* <SearchDisplay returnResult={returnResult} /> */}
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
