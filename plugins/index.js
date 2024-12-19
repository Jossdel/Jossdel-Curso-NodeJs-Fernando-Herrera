const { getUUID } = require("./get-id-plugin");
const { getAge } = require("./get-age-pluging");
const { httpClientPlugin } = require("./http-client.plugin");

module.exports = {
  getUUID,
  getAge,
  httpClientPlugin,
};
