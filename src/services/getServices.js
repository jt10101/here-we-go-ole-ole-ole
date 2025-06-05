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

// AIRTABLE SERVICES START HERE

async function getAirtable() {
  const url = `https://api.airtable.com/v0/app6gjtZQ7OinU39n/Table%201`;
  try {
    // const searchquery = ;
    const response = await fetch(url, {
      method: "GET",
      //   body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer patUZm7ykznd3wHLl.44dec8f80a327850270b7c23d2ca3d3344338c83790eee9ec09edf79c9946554`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function pushAirtable() {
  const url = `https://api.airtable.com/v0/app6gjtZQ7OinU39n/Table%201`;
  try {
    // const searchquery = ;
    const response = await fetch(url, {
      method: "POST",
      body: `{
  "fields": {
    "playerID": "1000",
    "Name": "Peterson"
  }
}`,
      headers: {
        Authorization: `Bearer patUZm7ykznd3wHLl.44dec8f80a327850270b7c23d2ca3d3344338c83790eee9ec09edf79c9946554`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
pushAirtable();

export { getPlayers, getIndividualPlayer, getAirtable };
