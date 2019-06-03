module.exports = [
  // box shadow
  {
    className: '.shadow-sm',
    expectedCSS: [
      ['box-shadow', '0 7px 15px 0 rgba(0, 0, 0, 0.11), 0 1px 8px 0 rgba(0, 0, 0, 0.06)'],
    ],
  },
  {
    className: '.shadow-md',
    expectedCSS: [
      ['box-shadow', '0 10px 20px 0 rgba(0, 0, 0, 0.22), 0 3px 12px 0 rgba(0, 0, 0, 0.07)'],
    ],
  },
  {
    className: '.shadow-lg',
    expectedCSS: [
      ['box-shadow', '0 15px 30px 0 rgba(0, 0, 0, 0.33), 0 5px 15px 0 rgba(0, 0, 0, 0.1)'],
    ],
  },
  // opacity
  {
    className: '.opacity-100',
    expectedCSS: [
      ['opacity', '1'],
    ],
  },
  {
    className: '.opacity-75',
    expectedCSS: [
      ['opacity', '0.75'],
    ],
  },
  {
    className: '.opacity-50',
    expectedCSS: [
      ['opacity', '0.5'],
    ],
  },
  {
    className: '.opacity-25',
    expectedCSS: [
      ['opacity', '0.25'],
    ],
  },
  {
    className: '.opacity-0',
    expectedCSS: [
      ['opacity', '0'],
    ],
  },
];
