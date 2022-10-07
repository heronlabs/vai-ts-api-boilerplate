import type {Config} from '@jest/types';

import baseConfig from '../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  collectCoverageFrom: [
    '<rootDir>/src/**/*-controller.ts',
    '<rootDir>/src/**/*-presenter.ts',
    '<rootDir>/src/**/*-services.ts',
  ],
  coverageDirectory: 'coverage/unit',
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
  detectOpenHandles: true,
};

export default config;
