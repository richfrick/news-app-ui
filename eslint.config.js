// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';

export default [
  {
    ignores: ['dist', '.eslintrc.cjs'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...vitestPlugin.environments.env.globals,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
      vitest: vitestPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...vitestPlugin.configs.recommended.rules,
      ...jestDom.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'warn',
      'vitest/expect-expect': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
  },
];
