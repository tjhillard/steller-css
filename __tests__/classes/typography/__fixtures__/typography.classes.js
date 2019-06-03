const defaults = {
  fontFamilyHeading: 'sans-serif',
  fontFamilyBody: 'sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '1.875rem',
    '2xl': '2.25rem',
    '3xl': '3rem',
    '4xl': '3.75rem',
  },
  fontWeights: {
    bold: '700',
    medium: '500',
    regular: '400',
    light: '300',
    thin: '100',
  },
  leadings: {
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
  },
  letterSpacings: {
    tight: '-0.05rem',
    normal: '0',
    wide: '0.05rem',
  },
};

module.exports = [
  // font family
  {
    className: '.font-accent',
    expectedCSS: [
      ['font-family', 'cursive'],
    ],
  },
  // font size
  {
    className: '.font-size-xs',
    expectedCSS: [
      ['font-size', defaults.fontSizes.xs],
    ],
  },
  {
    className: '.font-size-sm',
    expectedCSS: [
      ['font-size', defaults.fontSizes.sm],
    ],
  },
  {
    className: '.font-size-md',
    expectedCSS: [
      ['font-size', defaults.fontSizes.md],
    ],
  },
  {
    className: '.font-size-lg',
    expectedCSS: [
      ['font-size', defaults.fontSizes.lg],
    ],
  },
  {
    className: '.font-size-xl',
    expectedCSS: [
      ['font-size', defaults.fontSizes.xl],
    ],
  },
  {
    className: '.font-size-2xl',
    expectedCSS: [
      ['font-size', defaults.fontSizes['2xl']],
    ],
  },
  {
    className: '.font-size-3xl',
    expectedCSS: [
      ['font-size', defaults.fontSizes['3xl']],
    ],
  },
  {
    className: '.font-size-4xl',
    expectedCSS: [
      ['font-size', defaults.fontSizes['4xl']],
    ],
  },
  // font weight
  {
    className: '.font-weight-bold',
    expectedCSS: [
      ['font-weight', defaults.fontWeights.bold],
    ],
  },
  {
    className: '.font-weight-medium',
    expectedCSS: [
      ['font-weight', defaults.fontWeights.medium],
    ],
  },
  {
    className: '.font-weight-regular',
    expectedCSS: [
      ['font-weight', defaults.fontWeights.regular],
    ],
  },
  {
    className: '.font-weight-light',
    expectedCSS: [
      ['font-weight', defaults.fontWeights.light],
    ],
  },
  {
    className: '.font-weight-thin',
    expectedCSS: [
      ['font-weight', defaults.fontWeights.thin],
    ],
  },
  // leading
  {
    className: '.leading-sm',
    expectedCSS: [
      ['line-height', defaults.leadings.sm],
    ],
  },
  {
    className: '.leading-md',
    expectedCSS: [
      ['line-height', defaults.leadings.md],
    ],
  },
  {
    className: '.leading-lg',
    expectedCSS: [
      ['line-height', defaults.leadings.lg],
    ],
  },
  // letter spacing
  {
    className: '.letter-spacing-tight',
    expectedCSS: [
      ['letter-spacing', defaults.letterSpacings.tight],
    ],
  },
  {
    className: '.letter-spacing-normal',
    expectedCSS: [
      ['letter-spacing', defaults.letterSpacings.normal],
    ],
  },
  {
    className: '.letter-spacing-wide',
    expectedCSS: [
      ['letter-spacing', defaults.letterSpacings.wide],
    ],
  },
  // font style / decoration
  {
    className: '.italic',
    expectedCSS: [
      ['font-style', 'italic'],
    ],
  },
  {
    className: '.underline',
    expectedCSS: [
      ['text-decoration', 'underline'],
    ],
  },
  {
    className: '.no-underline',
    expectedCSS: [
      ['text-decoration', 'none'],
    ],
  },
  {
    className: '.lowercase',
    expectedCSS: [
      ['text-transform', 'lowercase'],
    ],
  },
  {
    className: '.uppercase',
    expectedCSS: [
      ['text-transform', 'uppercase'],
    ],
  },
  {
    className: '.capitalize',
    expectedCSS: [
      ['text-transform', 'capitalize'],
    ],
  },
  // lists
  {
    className: '.list-reset',
    expectedCSS: [
      ['list-style', 'none'],
      ['padding', '0px'],
    ],
  },
  // whitespace
  {
    className: '.whitespace-normal',
    expectedCSS: [
      ['white-space', 'normal'],
    ],
  },
  {
    className: '.whitespace-no-wrap',
    expectedCSS: [
      ['white-space', 'nowrap'],
    ],
  },
  {
    className: '.whitespace-pre',
    expectedCSS: [
      ['white-space', 'pre'],
    ],
  },
  {
    className: '.whitespace-pre-line',
    expectedCSS: [
      ['white-space', 'pre-line'],
    ],
  },
  {
    className: '.whitespace-pre-wrap',
    expectedCSS: [
      ['white-space', 'pre-wrap'],
    ],
  },
  // word wrap
  {
    className: '.break-word',
    expectedCSS: [
      ['word-wrap', 'break-word'],
    ],
  },
  {
    className: '.break-normal',
    expectedCSS: [
      ['word-wrap', 'normal'],
    ],
  },
  {
    className: '.truncate',
    expectedCSS: [
      ['overflow', 'hidden'],
      ['text-overflow', 'ellipses'],
      ['white-space', 'nowrap'],
    ],
  },
];
