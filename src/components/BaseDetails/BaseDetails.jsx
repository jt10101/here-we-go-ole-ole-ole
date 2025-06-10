const BaseDetails = ({ pdata, styles }) => {
  return (
    <>
      <ul>
        <b>Base Details</b>
        <li>Nationality: {pdata?.player?.nationality}</li>
        <li>Age: {pdata?.player?.age}</li>
        <li>Height: {pdata?.player?.height}</li>
        <li>Weight: {pdata?.player?.weight}</li>
      </ul>
    </>
  );
};

export { BaseDetails };
