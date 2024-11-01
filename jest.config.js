module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom",
}
