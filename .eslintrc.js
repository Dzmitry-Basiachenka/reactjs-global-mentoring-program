module.exports = {
  extends: [
    'semistandard',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest',
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-new': 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'off'
  }
};
