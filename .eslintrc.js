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
    'max-length': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'semi': 0,
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'eol-last': 0,
    'consistent-return': 0,
    'default-case': 0,
    'switch-colon-spacing': 0,
    'no-trailing-spaces': 0,
    'indent': 0,
    'padded-blocks': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': 0,
    'no-console': 0,
    'no-case-declarations': 0,
    'prefer-destructuring': 0,
    'object-shorthand': 0,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'no-multiple-empty-lines': 0
  }
};
