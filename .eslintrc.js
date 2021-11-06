module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/prettier/eslint-config-prettier
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT
        ? ['error', { allow: ['info', 'warn', 'error'] }]
        : 'off',
    'no-return-assign': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
        ],
      },
    ],
    'vue/valid-v-model': 'off',
  },
};
