export const PlayerCard = ({ player }) => {
  if (!player) {
    return null;
  }

  const { name, firstname, lastname, photo, nationality, age } = player.player;
  const teamName = player.statistics[0]?.team?.name;
  const position = player.statistics[0]?.games?.position;

  return (
    <div className="player-card">
      <div className="player-image-container">
        {photo ? (
          <img
            src={photo}
            alt={`${firstname} ${lastname}`}
            className="player-photo"
          />
        ) : (
          <div className="no-photo-placeholder">No Photo Available</div>
        )}
      </div>
      <div className="player-details">
        <h3 className="player-name">{name || `${firstname} ${lastname}`}</h3>
        <p className="player-nationality">{nationality}</p>
        {teamName && <p className="player-club">{teamName}</p>}
        {position && <p className="player-position">{position}</p>}
        {age && <p className="player-age">{age}</p>}
      </div>
    </div>
  );
};
