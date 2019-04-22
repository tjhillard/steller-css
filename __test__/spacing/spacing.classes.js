const defaultSpacingSizes = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

module.exports = [
  // margin
  {
    className: '.m-xs',
    expectedCSS: [
      ['margin', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.m-sm',
    expectedCSS: [
      ['margin', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.m-md',
    expectedCSS: [
      ['margin', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.m-lg',
    expectedCSS: [
      ['margin', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.m-xl',
    expectedCSS: [
      ['margin', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.m-2xl',
    expectedCSS: [
      ['margin', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.m-3xl',
    expectedCSS: [
      ['margin', defaultSpacingSizes['3xl']],
    ],
  },
  // padding
  {
    className: '.p-xs',
    expectedCSS: [
      ['padding', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.p-sm',
    expectedCSS: [
      ['padding', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.p-md',
    expectedCSS: [
      ['padding', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.p-lg',
    expectedCSS: [
      ['padding', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.p-xl',
    expectedCSS: [
      ['padding', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.p-2xl',
    expectedCSS: [
      ['padding', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.p-3xl',
    expectedCSS: [
      ['padding', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (x)
  {
    className: '.mx-xs',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.xs],
      ['margin-right', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.mx-sm',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.sm],
      ['margin-right', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.mx-md',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.md],
      ['margin-right', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.mx-lg',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.lg],
      ['margin-right', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.mx-xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.xl],
      ['margin-right', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.mx-2xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes['2xl']],
      ['margin-right', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.mx-3xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes['3xl']],
      ['margin-right', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (x)
  {
    className: '.px-xs',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.xs],
      ['padding-right', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.px-sm',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.sm],
      ['padding-right', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.px-md',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.md],
      ['padding-right', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.px-lg',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.lg],
      ['padding-right', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.px-xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.xl],
      ['padding-right', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.px-2xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes['2xl']],
      ['padding-right', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.px-3xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes['3xl']],
      ['padding-right', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (y)
  {
    className: '.my-xs',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.xs],
      ['margin-bottom', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.my-sm',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.sm],
      ['margin-bottom', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.my-md',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.md],
      ['margin-bottom', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.my-lg',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.lg],
      ['margin-bottom', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.my-xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.xl],
      ['margin-bottom', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.my-2xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes['2xl']],
      ['margin-bottom', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.my-3xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes['3xl']],
      ['margin-bottom', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (y)
  {
    className: '.py-xs',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.xs],
      ['padding-bottom', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.py-sm',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.sm],
      ['padding-bottom', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.py-md',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.md],
      ['padding-bottom', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.py-lg',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.lg],
      ['padding-bottom', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.py-xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.xl],
      ['padding-bottom', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.py-2xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes['2xl']],
      ['padding-bottom', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.py-3xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes['3xl']],
      ['padding-bottom', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (t)
  {
    className: '.mt-xs',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.mt-sm',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.mt-md',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.mt-lg',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.mt-xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.mt-2xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.mt-3xl',
    expectedCSS: [
      ['margin-top', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (t)
  {
    className: '.pt-xs',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.pt-sm',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.pt-md',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.pt-lg',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.pt-xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.pt-2xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.pt-3xl',
    expectedCSS: [
      ['padding-top', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (r)
  {
    className: '.mr-xs',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.mr-sm',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.mr-md',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.mr-lg',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.mr-xl',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.mr-2xl',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.mr-3xl',
    expectedCSS: [
      ['margin-right', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (r)
  {
    className: '.pr-xs',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.pr-sm',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.pr-md',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.pr-lg',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.pr-xl',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.pr-2xl',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.pr-3xl',
    expectedCSS: [
      ['padding-right', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (b)
  {
    className: '.mb-xs',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.mb-sm',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.mb-md',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.mb-lg',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.mb-xl',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.mb-2xl',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.mb-3xl',
    expectedCSS: [
      ['margin-bottom', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (b)
  {
    className: '.pb-xs',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.pb-sm',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.pb-md',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.pb-lg',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.pb-xl',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.pb-2xl',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.pb-3xl',
    expectedCSS: [
      ['padding-bottom', defaultSpacingSizes['3xl']],
    ],
  },
  // margin (l)
  {
    className: '.ml-xs',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.ml-sm',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.ml-md',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.ml-lg',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.ml-xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.ml-2xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.ml-3xl',
    expectedCSS: [
      ['margin-left', defaultSpacingSizes['3xl']],
    ],
  },
  // padding (b)
  {
    className: '.pl-xs',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.xs],
    ],
  },
  {
    className: '.pl-sm',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.sm],
    ],
  },
  {
    className: '.pl-md',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.md],
    ],
  },
  {
    className: '.pl-lg',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.lg],
    ],
  },
  {
    className: '.pl-xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes.xl],
    ],
  },
  {
    className: '.pl-2xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes['2xl']],
    ],
  },
  {
    className: '.pl-3xl',
    expectedCSS: [
      ['padding-left', defaultSpacingSizes['3xl']],
    ],
  },
];
