import { getIndividualPlayer } from "../../services/getServices";
import {
  pushAirtable,
  getAirtable,
  delAirtable,
} from "../../services/airtableServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailedPage = () => {
  const { playerID } = useParams();
  const [detailedData, setdetailedData] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [recordID, setrecordID] = useState(null);

  useEffect(() => {
    if (!playerID) {
      throw new Error("No PlayerID found");
    }

    const getIndividualData = async () => {
      try {
        // This portion calls the individual player's information when the page loads
        const data = await getIndividualPlayer(playerID);
        setdetailedData(data.response[0]);

        // This portion is for dealing with the fav icon
        const airtableData = await getAirtable();
        const airtableFilter = airtableData.records.find(
          (record) => record.fields.playerid === playerID
        );

        console.log(airtableFilter);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getIndividualData();
  }, [playerID]);
  const pdata = detailedData;

  const handleFav = () => {
    setIsFav(!isFav);
    if (!isFav) {
      pushAirtable(detailedData[0].player.name, detailedData[0].player.id);
    }
    if (isFav) {
      delAirtable(recordID);
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
