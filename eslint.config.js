import globals from 'globals'
import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    rules: {
      'vue/html-self-closing': 'off',
    }
  },
)
