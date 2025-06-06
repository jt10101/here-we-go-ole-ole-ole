import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAirtable } from "../../services/airtableServices";

const FavList = () => {
  const [favPlayers, setFavPlayers] = useState([]);
  useEffect(() => {
    const getFavs = async () => {
      try {
        const data = await getAirtable();
        const datamod = data.records;
        // console.log(datamod);
        setFavPlayers(datamod);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getFavs();
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(favPlayers, null, 2)}</pre> */}
      {favPlayers?.map((player) => (
        <Link to={`/players/${player?.fields?.playerid}`}>
          {player?.fields?.name}
        </Link>
      ))}
    </>
  );
};

export { FavList };

// <Link to="/players/306">Player</Link>
