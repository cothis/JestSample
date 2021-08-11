import type { Config } from '@jest/types';

// Sync Object
const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
};
export default config;
