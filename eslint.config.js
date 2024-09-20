import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ignores: ['dist/**', '.eslintrc.cjs', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...unicornPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,

      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
      'react/self-closing-comp': 'error',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',

      curly: 'error',
      'no-var': 'error',
      'no-multiple-empty-lines': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'dot-notation': 'error',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'case', next: '*' },
        { blankLine: 'always', prev: '*', next: 'case' },
      ],
      'no-constant-condition': 'warn',
      'sort-vars': 'error',
      quotes: ['error', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
      'prefer-template': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'no-undef': 'off',

      'unicorn/filename-case': ['error', { case: 'camelCase', ignore: ['App.tsx', 'vite-env.d.ts', 'next-env.d.ts', /^vendor/i] }],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/better-regex': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/catch-error-name': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/no-lonely-if': 'off',
      'unicorn/prefer-string-replace-all': 'off',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { format: ['PascalCase', 'camelCase'], selector: 'variable', modifiers: ['exported'] },
        { format: ['PascalCase', 'camelCase', 'snake_case'], selector: 'variable', leadingUnderscore: 'allow' },
        { format: ['camelCase'], selector: 'parameter', leadingUnderscore: 'allow' },
        { format: ['PascalCase', 'camelCase'], selector: 'function', modifiers: ['exported'] },
        { format: ['camelCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ],
    },
  },
];