import { Defender } from "./Defender";
import { Midfielder } from "./Midfielder";
import { Attacker } from "./Attacker";
import { Goalkeeper } from "./Goalkeeper";

const PositionDetails = ({ pdata }) => {
  let position = pdata?.statistics[0].games.position;
  let details = "";
  switch (position) {
    case "Defender":
      details = <Defender pdata={pdata} />;
      break;
    case "Midfielder":
      details = <Midfielder pdata={pdata} />;
      break;
    case "Attacker":
      details = <Attacker pdata={pdata} />;
      break;
    case "Goalkeeper":
      details = <Goalkeeper pdata={pdata} />;
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
