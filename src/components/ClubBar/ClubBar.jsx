import styles from "./ClubBar.module.css";
// images from https://brandlogos.net/series/2024-25-premier-league-teams-logos-vector

const ClubBar = ({ handleClickTeam }) => {
  const teamArr = [
    ["https://i.imgur.com/mSltbvt.png", 35], // Bournemouth
    ["https://i.imgur.com/taVnjf4.png", 42], // Arsenal
    ["https://i.imgur.com/Pjwwmwj.png", 66], // Aston Villa
    ["https://i.imgur.com/7LguGF5.png", 55], // Brentford
    ["https://i.imgur.com/GYG6VMS.png", 51], // Brighton
    ["https://i.imgur.com/Ld5UVqG.png", 49], // Chelsea
    ["https://i.imgur.com/jgcqLGv.png", 52], // Crystal Palace
    ["https://i.imgur.com/xMWyv8d.png", 45], // Everton
    ["https://i.imgur.com/IIgU0aG.png", 36], // Fulham
    ["https://i.imgur.com/tRxuMpL.png", 57], // Ipswich Town
    ["https://i.imgur.com/VTMboF0.png", 46], // Leicester City
    ["https://i.imgur.com/Rb6V8HX.png", 40], // Liverpool
    ["https://i.imgur.com/Szx0Yh6.png", 50], // Manchester City
    ["https://i.imgur.com/Nk3jYct.png", 33], // Manchester United
    ["https://i.imgur.com/sPNb2Hf.png", 34], // Newcastle United
    ["https://i.imgur.com/f8tMZFS.png", 65], // Nottingham Forest
    ["https://i.imgur.com/m7xYJAa.png", 41], // Southampton
    ["https://i.imgur.com/MTiPYUd.png", 47], // Tottenham Hotspur
    ["https://i.imgur.com/pJwuL3e.png", 48], // West Ham United
    ["https://i.imgur.com/UwwsQRD.png", 39], // Wolverhampton Wanderers
  ];

  return (
    <>
      <div>
        <fieldset className={styles.clubbarContainer}>
          <legend>Search by Club</legend>
          <div className={styles.clubbar}>
            {teamArr.map((team) => (
              <div>
                <img
                  className={styles.clubLogo}
                  name={team[1]}
                  src={team[0]}
                  onClick={handleClickTeam}
                />
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </>
  );
};

export { ClubBar };
