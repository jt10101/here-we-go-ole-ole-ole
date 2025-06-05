import { getIndividualPlayer } from "../../services/getServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailedPage = () => {
  const [detailedData, setdetailedData] = useState();
  const { playerID } = useParams();

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

  return (
    <>
      <p>Detailed Page</p>
      {/* <p>Name: {detailedData[0].player.firstname}</p> */}
    </>
  );
};

export { DetailedPage };
