
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'function',
        'if',
        'each',
        'include',
        'mixin',
        'else',
        'for',
        'else',
        'return',
        'error',
        'warn',
      ],
    }],
    'selector-type-no-unknown': [true, {
      ignoreTypes: ['else'],
    }],
    'selector-list-comma-newline-after': null,
    'max-empty-lines': null,
    'value-list-max-empty-lines': null,
    'no-eol-whitespace': null,
  },
};
