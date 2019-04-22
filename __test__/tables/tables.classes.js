module.exports = [
  // border collapse
  {
    className: '.border-collapse',
    expectedCSS: [
      ['border-collapse', 'collapse'],
    ],
  },
  {
    className: '.border-separate',
    expectedCSS: [
      ['border-collapse', 'separate'],
    ],
  },
  // table layout
  {
    className: '.table-auto',
    expectedCSS: [
      ['table-layout', 'auto'],
    ],
  },
  {
    className: '.table-fixed',
    expectedCSS: [
      ['table-layout', 'fixed'],
    ],
  },
];
