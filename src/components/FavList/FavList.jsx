import { useEffect, useState } from "react";
import { getAirtable } from "../../services/getServices";

const FavList = () => {
  const [favPlayers, setFavPlayers] = useState([]);
  // const data = await getAirtable();
  // setFavPlayers(data);

  useEffect(() => {
    const getFavs = async () => {
      try {
        const data = await getAirtable();
        const datamod = data.records;
        console.log(datamod);
        setFavPlayers(datamod);
      } catch (Error) {
        console.error("Error fetching data", Error);
      }
    };
    getFavs();
  }, []);

  return (
    <>
      <p>Favourites</p>
      <ul>
        {favPlayers?.map((player) => (
          <li>{player?.fields?.name}</li>
        ))}
      </ul>
    </>
  );
};

export { FavList };
