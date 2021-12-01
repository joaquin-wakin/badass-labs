const postcssSorting = require('./util/postcssSorting');

module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'declaration-colon-newline-after': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'max-nesting-depth': 3,
    'order/order': [...postcssSorting.order],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: [/^layer/, /^screen/] }],
    'selector-class-pattern': null,
    'string-quotes': 'single',
  },
};
