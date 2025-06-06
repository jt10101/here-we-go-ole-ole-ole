const PlayerDetails = ({ pdata }) => {
  return (
    <>
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
    </>
  );
};

export { PlayerDetails };
