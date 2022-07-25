const listPublicGists = () => {
  return fetch(
    process.env.API_URL + "?" + new URLSearchParams({ per_page: 10, page: 1 }),
    {
      method: "GET",
      headers: {
        Authorization: process.env.API_KEY,
      },
    }
  );
};

const getGistFile = (url) => {
  return fetch(url, { method: "GET" });
};
export { listPublicGists, getGistFile };
