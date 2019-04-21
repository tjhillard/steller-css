module.exports = [
  // grid-column
  {
    className: '.col-1',
    expectedCSS: [
      ['grid-column', '"span 1"'],
    ],
  },
  // grid-row
  {
    className: '.row-1',
    expectedCSS: [
      ['grid-row', '"span 1"'],
    ],
  },
];
