const Defender = ({ pdata }) => {
  return (
    <>
      <li>I am a defender</li>
      <li>Tackles: {pdata?.statistics[0].tackles.total}</li>
      <li>Blocks: {pdata?.statistics[0].tackles.blocks}</li>
      <li>Interceptions: {pdata?.statistics[0].tackles.interceptions}</li>
    </>
  );
};

export { Defender };
