const defaultTransformDistances = {
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '6px',
  xl: '8px',
};

module.exports = [
  // shift up
  {
    className: '.shift-up-xs',
    expectedCSS: [
      ['transform', `translateY(-${defaultTransformDistances.xs})`],
    ],
  },
  {
    className: '.shift-up-sm',
    expectedCSS: [
      ['transform', `translateY(-${defaultTransformDistances.sm})`],
    ],
  },
  {
    className: '.shift-up-md',
    expectedCSS: [
      ['transform', `translateY(-${defaultTransformDistances.md})`],
    ],
  },
  {
    className: '.shift-up-lg',
    expectedCSS: [
      ['transform', `translateY(-${defaultTransformDistances.lg})`],
    ],
  },
  {
    className: '.shift-up-xl',
    expectedCSS: [
      ['transform', `translateY(-${defaultTransformDistances.xl})`],
    ],
  },
  // shift right
  {
    className: '.shift-right-xs',
    expectedCSS: [
      ['transform', `translateX(${defaultTransformDistances.xs})`],
    ],
  },
  {
    className: '.shift-right-sm',
    expectedCSS: [
      ['transform', `translateX(${defaultTransformDistances.sm})`],
    ],
  },
  {
    className: '.shift-right-md',
    expectedCSS: [
      ['transform', `translateX(${defaultTransformDistances.md})`],
    ],
  },
  {
    className: '.shift-right-lg',
    expectedCSS: [
      ['transform', `translateX(${defaultTransformDistances.lg})`],
    ],
  },
  {
    className: '.shift-right-xl',
    expectedCSS: [
      ['transform', `translateX(${defaultTransformDistances.xl})`],
    ],
  },
  // shift down
  {
    className: '.shift-bottom-xs',
    expectedCSS: [
      ['transform', `translateY(${defaultTransformDistances.xs})`],
    ],
  },
  {
    className: '.shift-bottom-sm',
    expectedCSS: [
      ['transform', `translateY(${defaultTransformDistances.sm})`],
    ],
  },
  {
    className: '.shift-bottom-md',
    expectedCSS: [
      ['transform', `translateY(${defaultTransformDistances.md})`],
    ],
  },
  {
    className: '.shift-bottom-lg',
    expectedCSS: [
      ['transform', `translateY(${defaultTransformDistances.lg})`],
    ],
  },
  {
    className: '.shift-bottom-xl',
    expectedCSS: [
      ['transform', `translateY(${defaultTransformDistances.xl})`],
    ],
  },
  // shift left
  {
    className: '.shift-left-xs',
    expectedCSS: [
      ['transform', `translateX(-${defaultTransformDistances.xs})`],
    ],
  },
  {
    className: '.shift-left-sm',
    expectedCSS: [
      ['transform', `translateX(-${defaultTransformDistances.sm})`],
    ],
  },
  {
    className: '.shift-left-md',
    expectedCSS: [
      ['transform', `translateX(-${defaultTransformDistances.md})`],
    ],
  },
  {
    className: '.shift-left-lg',
    expectedCSS: [
      ['transform', `translateX(-${defaultTransformDistances.lg})`],
    ],
  },
  {
    className: '.shift-left-xl',
    expectedCSS: [
      ['transform', `translateX(-${defaultTransformDistances.xl})`],
    ],
  },
];
