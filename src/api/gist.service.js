// Callback Functions Start
const handleJSONError = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
const handlTextFileError = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.text();
};
const getResponse = (response) => response;

// Callback Functions End

/**
 * API Functions
 * @returns Promise
 */

const getPublicGists = (page) => {
  return fetch(
    `${process.env.API_URL}/gists?${new URLSearchParams({
      per_page: 10,
      page: page,
    })}`,
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: process.env.API_KEY,
      },
    }
  )
    .then(handleJSONError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Fetch Public Gists", error));
};

const getGist = (gist_id) => {
  return fetch(`${process.env.API_URL}/gists/${gist_id}`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: process.env.API_KEY,
    },
  })
    .then(handleJSONError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Fetch Gist", error));
};

const getGistFile = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then(handlTextFileError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Fetch Gist File", error));
};

const getGistsByUser = (username) => {
  return fetch(`${process.env.API_URL}/users/${username}/gists`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: process.env.API_KEY,
    },
  })
    .then(handleJSONError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Fetch Gist For User", error));
};

const starOneGist = (gist_id) => {
  return fetch(`${process.env.API_URL}/gists/${gist_id}/star`, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: process.env.API_KEY,
    },
  })
    .then(handleJSONError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Star a Gist", error));
};

const forkOneGist = (gist_id) => {
  return fetch(`${process.env.API_URL}/gists/${gist_id}/fork`, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: process.env.API_KEY,
    },
  })
    .then(handleJSONError)
    .then(getResponse)
    .catch((error) => console.log("Sorry, Cannot Star a Gist", error));
};

export {
  getGistFile,
  starOneGist,
  forkOneGist,
  getGist,
  getPublicGists,
  getGistsByUser,
};
