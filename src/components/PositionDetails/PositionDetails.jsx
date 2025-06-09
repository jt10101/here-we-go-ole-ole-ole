import { Defender } from "./Defender";
import { Midfielder } from "./Midfielder";
import { Attacker } from "./Attacker";
import { Goalkeeper } from "./Goalkeeper";

const PositionDetails = ({ pdata, styles }) => {
  let position = pdata?.statistics[0].games.position;
  let details = "";
  switch (position) {
    case "Defender":
      details = <Defender pdata={pdata} styles={styles} />;
      break;
    case "Midfielder":
      details = <Midfielder pdata={pdata} styles={styles} />;
      break;
    case "Attacker":
      details = <Attacker pdata={pdata} styles={styles} />;
      break;
    case "Goalkeeper":
      details = <Goalkeeper pdata={pdata} styles={styles} />;
      break;
  }
  return <>{details}</>;
};

export { PositionDetails };
