import { Link } from "react-router";

const FavList = ({ favPlayers }) => {
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
