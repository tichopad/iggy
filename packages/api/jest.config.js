const { pathsToModuleNameMapper } = require('ts-jest/utils');
const base = require('../../jest-base.config');
const tsconfig = require('../../tsconfig.json');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...base,
  displayName: 'GraphQL API',
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/../' }),
};
