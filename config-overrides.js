const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@shared": "src/components",
  })(config);

  return config;
};
