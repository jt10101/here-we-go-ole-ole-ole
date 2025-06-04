import { getIndividualPlayer } from "../../services/getServices";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const DetailedPage = () => {
  const [detailedData, setdetailedData] = useState([]);
  const { playerID } = useParams();

  useEffect(() => {
    const getIndividualData = async () => {
      // const data = await getIndividualPlayer(playerID);
      // console.log(data);
      console.log(playerID);

      // setdetailedData(data);
    };
  }, []);
  // console.log(playerID);
  // useEffect(() => {
  //   const getIndividualData = async (playerID) => {
  //     let data = await getIndividualPlayer(playerID);
  //     setdetailedData(data);
  //     console.log(data);
  //   };
  // }, []);
  return (
    <>
      <p>Detailed Page</p>
    </>
  );
};

export { DetailedPage };
