import type {Config} from '@jest/types';

import baseConfig from '../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testTimeout: 30000,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/**/entry-point*.ts',
    '!<rootDir>/**/app.ts',
  ],
  coverageDirectory: 'coverage/integration',
  testMatch: ['<rootDir>/tests/integration/**/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/integration/setup-env.ts'],
};

export default config;
