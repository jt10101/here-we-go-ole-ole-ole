const SearchDisplay = ({ returnResult }) => {
  return (
    <>
      {returnResult.map((player) => (
        <div className="pcard">
          <img className="photo" src={player.player.photo} />
          <ul>
            <li>
              {player.player.firstname} {player.player.lastname}
            </li>
            <li>{player.statistics[0].team.name}</li>
            <li>{player.statistics[0].games.position}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
export { SearchDisplay };
