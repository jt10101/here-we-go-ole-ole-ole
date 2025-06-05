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
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function pushAirtable(playerName, playerID) {
  const url = `https://api.airtable.com/v0/app6gjtZQ7OinU39n/Table%201`;
  try {
    // const searchquery = ;
    let newplayerName = playerName.toString();
    let newplayerID = playerID.toString();
    const dataToSend = {
      fields: {
        name: newplayerName,
        playerid: newplayerID,
      },
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(dataToSend),
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

async function delAirtable(id) {
  const url = `https://api.airtable.com/v0/app6gjtZQ7OinU39n/Table%201`;
  try {
    const searchquery = "records[]=";
    const response = await fetch(url + searchquery + id, {
      method: "DELETE",
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

export { getAirtable, pushAirtable, delAirtable };
