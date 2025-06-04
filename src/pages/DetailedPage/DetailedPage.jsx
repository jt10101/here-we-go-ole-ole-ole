import { getIndividualPlayer } from "../../services/getServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailedPage = () => {
  const [detailedData, setdetailedData] = useState([]);
  const { playerID } = Number(useParams());

  // console.log(getIndividualPlayer(playerID));

  useEffect(() => {
    const getIndividualData = async () => {
      const data = await getIndividualPlayer(playerID);
      console.log(data);
      // setdetailedData(data);
    };
  }, [playerID]);

  return (
    <>
      <p>Detailed Page</p>
    </>
  );
};

export { DetailedPage };
