// src/App.jsx
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchDisplay } from "./components/SearchDisplay/SearchDisplay";
import { getPlayers } from "./services/getServices";
import { useState } from "react";

const App = () => {
  const [searchPlayer, setSearchPlayer] = useState();
  const [returnResult, setReturnResult] = useState([]);

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

  return (
    <>
      <h1>Hello world!</h1>
      <SearchBar
        getPlayers={getPlayers}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SearchDisplay returnResult={returnResult} />
    </>
  );
};

export default App;
