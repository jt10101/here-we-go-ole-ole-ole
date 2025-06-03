// src/App.jsx

// Components
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchDisplay } from "./components/SearchDisplay/SearchDisplay";
import { NavBar } from "./components/NavBar/NavBar";
import { BannerNews } from "./components/BannerNews/BannerNews";
import { FavList } from "./components/FavList/FavList";
// Services
import { getPlayers } from "./services/getServices";
// React related libraries
import { useState } from "react";
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
        <section class="header">
          <img src="" />
          <BannerNews />
        </section>
        <section class="body">
          <section class="nav">
            <div class="navbar">
              <NavBar />
            </div>
            <div class="favourites">
              <FavList />
            </div>
          </section>
          <section class="content">
            <SearchBar
              getPlayers={getPlayers}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <div className="searchdisplay">
              <SearchDisplay returnResult={returnResult} />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
