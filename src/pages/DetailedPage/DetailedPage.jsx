import {
  getIndividualPlayer,
  pushAirtable,
  getAirtable,
} from "../../services/getServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailedPage = () => {
  const { playerID } = useParams();
  const [detailedData, setdetailedData] = useState("");
  const [isFav, setIsFav] = useState();
  const [favPlayers, setFavPlayers] = useState([]); // Test to pre-set isFav state when page loads
  useEffect(() => {
    const getFavs = async () => {
      try {
        const data = await getAirtable();
        const datamod = data.records.map((player) => player.fields.playerid);
        // console.log(datamod);
        setFavPlayers(datamod);
        if (favPlayers.includes(playerID)) {
          setIsFav(true);
        }
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getFavs();
  }, [favPlayers, playerID]);

  useEffect(() => {
    if (!playerID) {
      throw new Error("No PlayerID found");
    }
    const getIndividualData = async () => {
      try {
        const data = await getIndividualPlayer(playerID);
        const datamod = data.response;
        console.log(datamod);
        setdetailedData(datamod);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getIndividualData();
  }, [playerID]);
  const pdata = detailedData[0];

  const handleFav = () => {
    setIsFav(!isFav);
    if (!isFav) {
      pushAirtable(detailedData[0].player.name, detailedData[0].player.id);
    }
  };

  return (
    <>
      {/* <p>Name: {JSON.stringify(detailedData[0]?.player?.name)}</p> */}
      {isFav ? (
        <img
          className="fav"
          src="https://i.imgur.com/YjHli2l.png"
          onClick={handleFav}
        />
      ) : (
        <img
          className="nonfav"
          src="https://i.imgur.com/gkZyBKv.png"
          onClick={handleFav}
        />
      )}
      <p>Name: {pdata?.player?.name}</p>
      <img src={pdata?.player?.photo} />
      <p>Age: {pdata?.player?.age}</p>
      <p>Nationality: {pdata?.player?.nationality}</p>
      <p>Height: {pdata?.player?.height}</p>
      <p>Weight: {pdata?.player?.weight} </p>
      <p>Team: {pdata?.statistics[0].team.name} </p>
      <img src={pdata?.statistics[0].team.logo} />
      <p>Position: {pdata?.statistics[0].games.position} </p>
      <p>Appearances: {pdata?.statistics[0].games.appearences} </p>

      <pre>{JSON.stringify(detailedData, null, 2)}</pre>
    </>
  );
};

export { DetailedPage };

// For detailed player page, sort data based on the player's position (e.g Striker, Defender, Goalkeeper)
