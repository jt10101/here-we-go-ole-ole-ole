import { useNavigate } from "react-router";

export const PlayerCard = ({ player }) => {
  const navigate = useNavigate();
  if (!player) {
    return null;
  }
  const { name, firstname, lastname, photo, nationality, age, id } =
    player.player;
  const teamName = player.statistics[0]?.team?.name;
  const position = player.statistics[0]?.games?.position;
  const handleSelect = (event) => {
    let selectedPlayerID = event.target.name;
    navigate(`/players/${selectedPlayerID}`);
  };

  return (
    <div className="player-card">
      <div className="player-image-container">
        {photo ? (
          <img
            src={photo}
            alt={`${firstname} ${lastname}`}
            className="player-photo"
            name={id}
            onClick={handleSelect}
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
