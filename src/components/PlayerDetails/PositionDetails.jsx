const PositionDetails = ({ styles, pdata }) => {
  let position = pdata?.statistics[0].games.position;
  let details = "";
  switch (position) {
    case "Defender":
      details = (
        <>
          <li>I am a defender</li>
          <li>Tackles: {pdata?.statistics[0].tackles.total}</li>
          <li>Blocks: {pdata?.statistics[0].tackles.blocks}</li>
          <li>Interceptions: {pdata?.statistics[0].tackles.interceptions}</li>
        </>
      );
      break;
    case "Attacker":
      details = (
        <>
          <li>I am a attacker</li>
          <li>Shots Total: {pdata?.statistics[0].shots.total}</li>
          <li>Shots On: {pdata?.statistics[0].shots.on}</li>
          <li>Goals: {pdata?.statistics[0].goals.total}</li>
          <li>Assists: {pdata?.statistics[0].goals.assists}</li>
        </>
      );
      break;
    case "Goalkeeper":
      details = (
        <>
          <li>I am a goalkeeper</li>
          <li>Saves: {pdata?.statistics[0].goals.saves}</li>
          <li>Conceded: {pdata?.statistics[0].goals.conceded}</li>
        </>
      );
      break;
  }
  return (
    <>
      <ul>
        <b>Position Details</b>
        {details}
      </ul>
    </>
  );
};

export { PositionDetails };
