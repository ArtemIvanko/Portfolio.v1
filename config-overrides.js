const path = require("path");
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "graphql-tag/loader",
      },
    ],
  });

  alias({
    "@": path.resolve(__dirname, "src"),
    "@shared": path.resolve(__dirname, "src/components"),
    "@utils": path.resolve(__dirname, "src/components/utils"),
    "@assets": path.resolve(__dirname, "src/assets"),
  })(config);

  return config;
};
