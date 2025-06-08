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

async function getIndividualPlayer(playerID) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/players?season=2024&league=39`;
  try {
    const searchquery = `&id=${playerID}`;
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

async function getFixtures() {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2024&last=2`;
  try {
    // const searchquery = `&id=${playerID}`;
    const response = await fetch(url, {
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

async function getStanding() {
  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2024`;
  try {
    // const searchquery = `&id=${playerID}`;
    const response = await fetch(url, {
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

export { getPlayers, getIndividualPlayer, getFixtures, getStanding };
