const SearchDisplay = ({ returnResult }) => {
  return (
    <>
      {returnResult.map((player) => (
        <div className="pcard">
          <p>
            {player.player.firstname} {player.player.lastname}
          </p>
          <img className="photo" src={player.player.photo} />
        </div>
      ))}
    </>
  );
};
export { SearchDisplay };
