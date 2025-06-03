// let playername = "szoboszlai";
// let league = 39;

async function getPlayers(playername) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/players?season=2024&league=39`;
  try {
    const searchquery = `&search=${playername}`;
    const response = await fetch(url + searchquery, {
      method: "GET",
      //   body: JSON.stringify(data),
      headers: {
        "X-RapidAPI-Key": `5c20702421msh8972a317aee15c4p1e393ajsncda94ceaaf98`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export { getPlayers };
