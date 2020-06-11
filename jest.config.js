module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]',
    '<rootDir>[/\\\\]src[/\\\\]db[/\\\\]sdk.ts',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  collectCoverage: true,
  coverageThreshold: {
    global: {},
  },
};
