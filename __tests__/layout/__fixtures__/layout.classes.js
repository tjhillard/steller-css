module.exports = [
  // display
  {
    className: '.block',
    expectedCSS: [
      ['display', 'block'],
    ],
  },
  {
    className: '.inline',
    expectedCSS: [
      ['display', 'inline'],
    ],
  },
  {
    className: '.inline-block',
    expectedCSS: [
      ['display', 'inline-block'],
    ],
  },
  {
    className: '.hidden',
    expectedCSS: [
      ['display', 'none'],
    ],
  },
  // text alignment
  {
    className: '.text-center',
    expectedCSS: [
      ['text-align', 'center'],
    ],
  },
  {
    className: '.text-left',
    expectedCSS: [
      ['text-align', 'left'],
    ],
  },
  {
    className: '.text-right',
    expectedCSS: [
      ['text-align', 'right'],
    ],
  },
  {
    className: '.text-justify',
    expectedCSS: [
      ['text-align', 'justify'],
    ],
  },
  // float
  {
    className: '.float-left',
    expectedCSS: [
      ['float', 'left'],
    ],
  },
  {
    className: '.float-right',
    expectedCSS: [
      ['float', 'right'],
    ],
  },
  {
    className: '.float-none',
    expectedCSS: [
      ['float', 'none'],
    ],
  },
  // positioning
  {
    className: '.static',
    expectedCSS: [
      ['position', 'static'],
    ],
  },
  {
    className: '.fixed',
    expectedCSS: [
      ['position', 'fixed'],
    ],
  },
  {
    className: '.absolute',
    expectedCSS: [
      ['position', 'absolute'],
    ],
  },
  {
    className: '.relative',
    expectedCSS: [
      ['position', 'relative'],
    ],
  },
  {
    className: '.sticky',
    expectedCSS: [
      ['position', 'sticky'],
    ],
  },
  {
    className: '.pin',
    expectedCSS: [
      ['top', '0px'],
      ['right', '0px'],
      ['bottom', '0px'],
      ['left', '0px'],
    ],
  },
  {
    className: '.pin-t',
    expectedCSS: [
      ['top', '0px'],
    ],
  },
  {
    className: '.pin-r',
    expectedCSS: [
      ['right', '0px'],
    ],
  },
  {
    className: '.pin-b',
    expectedCSS: [
      ['bottom', '0px'],
    ],
  },
  {
    className: '.pin-l',
    expectedCSS: [
      ['left', '0px'],
    ],
  },
  // visibility
  {
    className: '.visible',
    expectedCSS: [
      ['visibility', 'visible'],
    ],
  },
  {
    className: '.invisible',
    expectedCSS: [
      ['visibility', 'hidden'],
    ],
  },
  // z-index
  {
    className: '.z-1',
    expectedCSS: [
      ['z-index', '1'],
    ],
  },
  {
    className: '.z-2',
    expectedCSS: [
      ['z-index', '2'],
    ],
  },
  {
    className: '.z-10',
    expectedCSS: [
      ['z-index', '10'],
    ],
  },
  {
    className: '.z-20',
    expectedCSS: [
      ['z-index', '20'],
    ],
  },
  {
    className: '.z-max',
    expectedCSS: [
      ['z-index', '2147483647'],
    ],
  },
  // vertical alignment
  {
    className: '.vertical-align-baseline',
    expectedCSS: [
      ['vertical-align', 'baseline'],
    ],
  },
  {
    className: '.vertical-align-top',
    expectedCSS: [
      ['vertical-align', 'top'],
    ],
  },
  {
    className: '.vertical-align-middle',
    expectedCSS: [
      ['vertical-align', 'middle'],
    ],
  },
  {
    className: '.vertical-align-bottom',
    expectedCSS: [
      ['vertical-align', 'bottom'],
    ],
  },
  {
    className: '.vertical-align-text-top',
    expectedCSS: [
      ['vertical-align', 'text-top'],
    ],
  },
  {
    className: '.vertical-align-text-bottom',
    expectedCSS: [
      ['vertical-align', 'text-bottom'],
    ],
  },
];
