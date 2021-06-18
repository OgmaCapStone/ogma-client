const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    ENDPOINT_URL: process.env.ENDPOINT_URL,
    PROJECT_URL: process.env.PROJECT_URL,
  },
};
