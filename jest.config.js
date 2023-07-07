module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)",
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).tsx?(x)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.svg$": "<rootDir>/__mocks__/svg.js",
    "^@shared/(.*)$": "<rootDir>/src/components/$1",
    "^@utils/(.*)$": "<rootDir>/src/components/utils/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
  },
  transform: {
    "\\.(png|jpg|pdf)$": "<rootDir>/__mocks__/fileTransformer.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
