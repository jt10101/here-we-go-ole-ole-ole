const Goalkeeper = ({ pdata }) => {
  return (
    <>
      <li>I am a goalkeeper</li>
      <li>Saves: {pdata?.statistics[0].goals.saves}</li>
      <li>Conceded: {pdata?.statistics[0].goals.conceded}</li>
    </>
  );
};

export { Goalkeeper };
