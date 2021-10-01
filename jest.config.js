const base = require('./jest-base.config.js');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...base,
  projects: ['<rootDir>/packages/*/jest.config.js'],
};
