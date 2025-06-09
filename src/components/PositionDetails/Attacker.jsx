const Attacker = ({ pdata }) => {
  return (
    <>
      <li>I am an attacker</li>
      <li>Shots Total: {pdata?.statistics[0].shots.total}</li>
      <li>Shots On: {pdata?.statistics[0].shots.on}</li>
      <li>Goals: {pdata?.statistics[0].goals.total}</li>
      <li>Assists: {pdata?.statistics[0].goals.assists}</li>
    </>
  );
};

export { Attacker };

// Data that I will display as attacker specifically
// Shots Total {pdata?.statistics[0].shots.total}
// Shots On {pdata?.statistics[0].shots.on}
// Goals {pdata?.statistics[0].goals.total}
// Assists {pdata?.statistics[0].goals.assists}
