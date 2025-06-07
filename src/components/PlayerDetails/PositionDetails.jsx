const PositionDetails = ({ styles, pdata }) => {
  let position = pdata?.statistics[0].games.position;
  let details = "";
  switch (position) {
    case "Defender":
      details = (
        <>
          <p>I am a defender</p>
          <p>Test</p>
        </>
      );
      break;
    case "Attacker":
      details = (
        <>
          <p>I am an attacker</p>
          <p>Test</p>
        </>
      );
      break;
    case "Goalkeeper":
      details = (
        <>
          <p>I am a goalkeeper</p>
          <p>Test</p>
        </>
      );
      break;
  }
  return (
    <>
      <ul>
        <b>Position Details</b>
        <li>{position}</li>
        {details}
      </ul>
    </>
  );
};

export { PositionDetails };
