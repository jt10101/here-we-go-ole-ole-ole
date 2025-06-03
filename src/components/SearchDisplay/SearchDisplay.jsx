const SearchDisplay = (props) => {
  return (
    <>
      {/* <h1>Display Results</h1> */}
      {props.returnResult.map((player) => (
        <p>{player.player.name} </p>
      ))}
    </>
  );
};
export { SearchDisplay };
