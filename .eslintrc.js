module.exports = {
  extends: ['shellscape/typescript', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'no-underscore-dangle': 'off',
        'spaced-comment': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    },
    {
      files: ['**/scripts/**', '**/test/**'],
      rules: {
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'no-console': 'off'
      }
    }
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'local',
        varsIgnorePattern: '^_'
      }
    ],
    // Note: postcss-css-variables makes heavy use of these.
    'no-loop-func': 'off'
  }
};
