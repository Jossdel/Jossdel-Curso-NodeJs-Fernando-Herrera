const httpClientPlugin = {
  get: async (url) => {
    const res = await fetch(url);
    return await res.json();
  },
};

module.exports = {
  httpClientPlugin,
};
