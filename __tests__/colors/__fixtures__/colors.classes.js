module.exports = [
  // text color
  {
    className: '.text-primary',
    expectedCSS: [
      ['color', 'rgb(63, 124, 172)'],
    ],
  },
  {
    className: '.text-secondary',
    expectedCSS: [
      ['color', 'rgb(226, 203, 158)'],
    ],
  },
  // background color
  {
    className: '.bg-primary',
    expectedCSS: [
      ['background-color', 'rgb(63, 124, 172)'],
    ],
  },
  {
    className: '.bg-secondary',
    expectedCSS: [
      ['background-color', 'rgb(226, 203, 158)'],
    ],
  },
];
