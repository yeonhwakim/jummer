module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['react-app', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'prefer-destructuring': 0,
    'no-nested-ternary': 0
  }
};
