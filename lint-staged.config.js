module.exports = {
  '*.js': ['yarn lint:eslint', 'yarn lint:prettier'],
  '*.ts': ['yarn lint:eslint', 'yarn lint:prettier'],
  'package.json': ['yarn lint:prettier'],
  '*.vue': ['yarn lint:eslint', 'yarn lint:prettier'],
  '*.scss': ['yarn lint:prettier'],
  '*.{jpeg,jpg,png,gif,svg}': ['imagemin-lint-staged'],
};
