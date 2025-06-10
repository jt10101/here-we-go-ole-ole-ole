// API Serivces
import { getIndividualPlayer } from "../../services/getServices";
import {
  pushAirtable,
  getAirtable,
  delAirtable,
} from "../../services/airtableServices";
// React Libraries
import { useParams } from "react-router";
import { useState, useEffect } from "react";
// Componenets
import { FavIcon } from "../../components/FavIcon/FavIcon";
import { PlayerDetails } from "../../components/PlayerDetails/PlayerDetails";

const DetailedPage = ({ renderFavs }) => {
  const { playerID } = useParams();
  const [detailedData, setdetailedData] = useState(null);
  const [isFav, setIsFav] = useState(false); // This state is for determining if the player loaded is a Fav based on airtable
  const [recordID, setRecordID] = useState(null);

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
        if (airtableFilter) {
          setIsFav(true);
          setRecordID(airtableFilter.id);
        } else {
          setIsFav(false);
          setRecordID(null);
        }
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getIndividualData();
  }, [playerID]);

  const pdata = detailedData;

  const handleFav = async () => {
    // Ensure pdata exists before attempting to push/delete
    if (!pdata || !pdata.player || !pdata.player.name || !pdata.player.id) {
      console.warn(
        "Player data not fully loaded. Cannot process favorite action."
      );
      return;
    }
    if (isFav) {
      // It was a favorite, now unfavorite (delete)
      if (recordID) {
        try {
          await delAirtable(recordID);
          setIsFav(false);
          setRecordID(null); // Clear record ID after deletion
        } catch (error) {
          console.error("Error deleting favorite:", error);
        }
      } else {
        console.warn("Attempted to unfavorite but no recordID found.");
      }
    } else {
      try {
        const newRecord = await pushAirtable(
          pdata.player.name,
          pdata.player.id
        );
        if (newRecord && newRecord.id) {
          setIsFav(true);
          setRecordID(newRecord.id);
        } else {
          console.error("Failed to add player to favorites: No ID returned.");
        }
      } catch (error) {
        console.error("Error pushing favorite:", error);
      }
    }
    renderFavs();
  };

  if (pdata === null) {
    return <div>Loading player details...</div>;
  }

  return (
    <>
      <FavIcon isFav={isFav} handleFav={handleFav} />
      <PlayerDetails pdata={pdata} />
      {/* <pre>{JSON.stringify(detailedData, null, 2)}</pre> */}
    </>
  );
};

export { DetailedPage };
