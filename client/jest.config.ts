import type { Config } from '@jest/types';

// Sync Object
const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/test/**/*.spec.ts?(x)'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    '^.+\\.(t|j)s?x$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};
export default config;
