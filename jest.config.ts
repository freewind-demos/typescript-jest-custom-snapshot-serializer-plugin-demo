import {InitialOptions} from '@jest/types/build/Config';

const config: InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config;
