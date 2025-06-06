const FavIcon = ({ isFav, handleFav }) => {
  return (
    <>
      {isFav ? (
        <img
          className="fav"
          src="https://i.imgur.com/YjHli2l.png"
          onClick={handleFav}
        />
      ) : (
        <img
          className="nonfav"
          src="https://i.imgur.com/gkZyBKv.png"
          onClick={handleFav}
        />
      )}
    </>
  );
};

export { FavIcon };
