import styles from "./ClubBar.module.css";
// images from https://brandlogos.net/series/2024-25-premier-league-teams-logos-vector

const ClubBar = () => {
  const logoArr = [
    "https://i.imgur.com/mSltbvt.png", // Bournemouth
    "https://i.imgur.com/taVnjf4.png", // Arsenal
    "https://i.imgur.com/Pjwwmwj.png", // Aston Villa
    "https://i.imgur.com/7LguGF5.png", // Brentford
    "https://i.imgur.com/GYG6VMS.png", // Brighton
    "https://i.imgur.com/Ld5UVqG.png", // Chelsea
    "https://i.imgur.com/jgcqLGv.png", // Crystal Palace
    "https://i.imgur.com/xMWyv8d.png", // Everton
    "https://i.imgur.com/IIgU0aG.png", // Fulham
    "https://i.imgur.com/tRxuMpL.png", // Ipswich Town
    "https://i.imgur.com/VTMboF0.png", // Leicester City
    "https://i.imgur.com/Rb6V8HX.png", // Liverpool
    "https://i.imgur.com/Szx0Yh6.png", // Manchester City
    "https://i.imgur.com/Nk3jYct.png", // Manchester United
    "https://i.imgur.com/sPNb2Hf.png", // Newcastle United
    "https://i.imgur.com/f8tMZFS.png", // Nottingham Forest
    "https://i.imgur.com/m7xYJAa.png", // Southampton
    "https://i.imgur.com/MTiPYUd.png", // Tottenham Hotspur
    "https://i.imgur.com/pJwuL3e.png", // West Ham United
    "https://i.imgur.com/UwwsQRD.png", // Wolverhampton Wanderers
  ];
  return (
    <>
      <div className={styles.clubbar}>
        {logoArr.map((team) => (
          <div>
            <img className={styles.clubLogo} src={team} />
          </div>
        ))}
      </div>
    </>
  );
};

export { ClubBar };
