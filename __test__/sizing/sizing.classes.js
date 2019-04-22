module.exports = [
  // width
  {
    className: '.w-auto',
    expectedCSS: [
      ['width', 'auto'],
    ],
  },
  {
    className: '.w-full',
    expectedCSS: [
      ['width', '100%'],
    ],
  },
  {
    className: '.w-screen',
    expectedCSS: [
      ['width', '100vw'],
    ],
  },
  {
    className: '.w-1px',
    expectedCSS: [
      ['width', '1px'],
    ],
  },
  // height
  {
    className: '.h-auto',
    expectedCSS: [
      ['height', 'auto'],
    ],
  },
  {
    className: '.h-full',
    expectedCSS: [
      ['height', '100%'],
    ],
  },
  {
    className: '.h-screen',
    expectedCSS: [
      ['height', '100vh'],
    ],
  },
  {
    className: '.h-1px',
    expectedCSS: [
      ['height', '1px'],
    ],
  },
  // max width
  {
    className: '.max-w-auto',
    expectedCSS: [
      ['max-width', 'auto'],
    ],
  },
  {
    className: '.max-w-full',
    expectedCSS: [
      ['max-width', '100%'],
    ],
  },
  {
    className: '.max-w-screen',
    expectedCSS: [
      ['max-width', '100vw'],
    ],
  },
  {
    className: '.max-w-1px',
    expectedCSS: [
      ['max-width', '1px'],
    ],
  },
  {
    className: '.max-w-0',
    expectedCSS: [
      ['max-width', '0'],
    ],
  },
  // max height
  {
    className: '.max-h-auto',
    expectedCSS: [
      ['max-height', 'auto'],
    ],
  },
  {
    className: '.max-h-full',
    expectedCSS: [
      ['max-height', '100%'],
    ],
  },
  {
    className: '.max-h-screen',
    expectedCSS: [
      ['max-height', '100vh'],
    ],
  },
  {
    className: '.max-h-1px',
    expectedCSS: [
      ['max-height', '1px'],
    ],
  },
  {
    className: '.max-h-0',
    expectedCSS: [
      ['max-height', '0'],
    ],
  },
];
