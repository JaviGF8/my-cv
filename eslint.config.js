import js from '@eslint/js';
import eslintPluginVitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginImportX, { createNodeResolver } from 'eslint-plugin-import-x';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import ts from 'typescript-eslint';

export const ignores = [
  'node_modules/**',
  'dist/**',
  '.agents/**',
  '.claude/**',
  '.codex/**',
  '.gemini/**',
  '.github/**',
  '*.css',
  'package.json',
  'eslint.config.js',
];

export default [
  { ignores },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': ts.plugin,
      'vitest': eslintPluginVitest,
      'testing-library': eslintPluginTestingLibrary,
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'promise': eslintPluginPromise,
      'import': eslintPluginImportX,
      'eslint-comments': eslintPluginEslintComments,
      'prettier': eslintPluginPrettier,
      'sort-destructure-keys': pluginSortDestructureKeys,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: false, ignoreProperties: false },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/sort-type-constituents': 'error',
      'no-shadow': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'camelcase': 1,
      'brace-style': 'error',
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'import/no-dynamic-require': 1,
      'import/no-named-as-default': 1,
      'import/no-webpack-loader-syntax': 1,
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'import/no-unresolved': [1, { commonjs: true, amd: true }],
      'import/namespace': 1,
      'import/default': 1,
      'import/export': 1,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.*',
            'vitest.config.ts',
            'vite.config.ts',
            'eslint.config.js',
            'src/test/**',
          ],
        },
      ],
      'import/order': [
        'error',
        {
          'groups': ['external', 'internal', 'builtin', 'parent', 'sibling', 'index'],
          'pathGroups': [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@testing-library/**',
              group: 'external',
              position: 'after',
            },
            { pattern: 'assets/**', group: 'internal', position: 'before' },
            { pattern: 'i18n/**', group: 'internal', position: 'before' },
            { pattern: 'features/**', group: 'internal', position: 'before' },
            { pattern: 'components/**', group: 'internal', position: 'before' },
            { pattern: 'pages/**', group: 'internal', position: 'before' },
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'max-lines': [
        'warn',
        {
          max: 400,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'max-params': ['error', 3],
      'no-confusing-arrow': 0,
      'no-alert': 1,
      'no-console': 1,
      'no-multi-assign': 1,
      'no-param-reassign': 1,
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'Do not import React as default. Use named imports instead.',
            },
          ],
        },
      ],
      'no-underscore-dangle': 'error',
      'no-use-before-define': 'error',
      'no-plusplus': 'off',
      'prefer-destructuring': 1,
      'promise/catch-or-return': ['error', { allowFinally: true }],
      'react/destructuring-assignment': 0,
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'react/function-component-definition': 0,
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: false,
        },
      ],
      'no-else-return': 'error',
      'object-shorthand': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-danger': 2,
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 0,
      'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
      'testing-library/await-async-events': 'off',
      'vitest/no-commented-out-tests': 'warn',
    },
    settings: {
      'import-x/resolver-next': [
        createNodeResolver({
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          tsconfig: {
            configFile: './tsconfig.app.json',
          },
        }),
      ],
      'import-x/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      },
      'react': {
        version: 'detect',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', 'src/test/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        console: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'testing-library/no-node-access': 'off',
      'max-lines': 'off',
    },
  },
  {
    files: ['src/i18n/**/*'],
    rules: {
      camelcase: 'off',
    },
  },
  eslintConfigPrettier,
];
