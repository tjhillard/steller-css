module.exports = [
  // transition timing
  {
    className: '.transition-timing-ease',
    expectedCSS: [
      ['transition-timing-function', 'ease'],
    ],
  },
  {
    className: '.transition-timing-ease-in',
    expectedCSS: [
      ['transition-timing-function', 'ease-in'],
    ],
  },
  {
    className: '.transition-timing-ease-out',
    expectedCSS: [
      ['transition-timing-function', 'ease-out'],
    ],
  },
  {
    className: '.transition-timing-ease-in-out',
    expectedCSS: [
      ['transition-timing-function', 'ease-in-out'],
    ],
  },
  {
    className: '.transition-timing-linear',
    expectedCSS: [
      ['transition-timing-function', 'linear'],
    ],
  },
  // transition property
  {
    className: '.transition-all',
    expectedCSS: [
      ['transition-property', 'all'],
    ],
  },
  {
    className: '.transition-width',
    expectedCSS: [
      ['transition-property', 'width'],
    ],
  },
  // transition duration
  {
    className: '.transition-duration-normal',
    expectedCSS: [
      ['transition-duration', '300ms'],
    ],
  },
  {
    className: '.transition-duration-fast',
    expectedCSS: [
      ['transition-duration', '200ms'],
    ],
  },
  {
    className: '.transition-duration-slow',
    expectedCSS: [
      ['transition-duration', '400ms'],
    ],
  },
];
