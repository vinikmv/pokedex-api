module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/services/*.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/src/modules/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',

  },
  testMatch: ['**/*.spec.ts'],
}
