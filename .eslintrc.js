/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'error',
    'no-use-before-define': 'off',
    'import/newline-after-import': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.eslint.json', './packages/*/tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
