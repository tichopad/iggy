/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  projects: ['<rootDir>/packages/api', '<rootDir>/packages/codegen-plugin-schema'],
};
