module.exports = [
  // border color
  {
    className: '.border-primary',
    expectedCSS: [
      ['border-color', '#3f7cac'],
    ],
  },

  {
    className: '.border-secondary',
    expectedCSS: [
      ['border-color', '#e2cb9e'],
    ],
  },
  // border radius (all sides)
  {
    className: '.rounded-full',
    expectedCSS: [
      ['border-radius', '9999px'],
    ],
  },
  {
    className: '.rounded-sm',
    expectedCSS: [
      ['border-radius', '5px'],
    ],
  },
  {
    className: '.rounded-md',
    expectedCSS: [
      ['border-radius', '10px'],
    ],
  },
  {
    className: '.rounded-lg',
    expectedCSS: [
      ['border-radius', '15px'],
    ],
  },
  {
    className: '.rounded-xl',
    expectedCSS: [
      ['border-radius', '20px'],
    ],
  },
  // border radius (individual corner)
  {
    className: '.rounded-tl-md',
    expectedCSS: [
      ['border-top-left-radius', '10px'],
    ],
  },
  {
    className: '.rounded-tr-md',
    expectedCSS: [
      ['border-top-right-radius', '10px'],
    ],
  },
  {
    className: '.rounded-bl-md',
    expectedCSS: [
      ['border-bottom-left-radius', '10px'],
    ],
  },
  {
    className: '.rounded-br-md',
    expectedCSS: [
      ['border-bottom-right-radius', '10px'],
    ],
  },
  // border width
  {
    className: '.border-xs',
    expectedCSS: [
      ['border-width', '1px'],
    ],
  },
  {
    className: '.border-xs',
    expectedCSS: [
      ['border-width', '1px'],
    ],
  },
  {
    className: '.border-sm',
    expectedCSS: [
      ['border-width', '2px'],
    ],
  },
  {
    className: '.border-md',
    expectedCSS: [
      ['border-width', '4px'],
    ],
  },
  {
    className: '.border-lg',
    expectedCSS: [
      ['border-width', '6px'],
    ],
  },
  {
    className: '.border-xl',
    expectedCSS: [
      ['border-width', '8px'],
    ],
  },
  // border style
  {
    className: '.border-style-solid',
    expectedCSS: [
      ['border-style', 'solid'],
    ],
  },
  {
    className: '.border-style-dashed',
    expectedCSS: [
      ['border-style', 'dashed'],
    ],
  },
  {
    className: '.border-style-dotted',
    expectedCSS: [
      ['border-style', 'dotted'],
    ],
  },
  {
    className: '.border-style-inset',
    expectedCSS: [
      ['border-style', 'inset'],
    ],
  },
  {
    className: '.border-style-outset',
    expectedCSS: [
      ['border-style', 'outset'],
    ],
  },
];
