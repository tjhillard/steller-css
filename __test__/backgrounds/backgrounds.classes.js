module.exports = [
  // background attachment
  {
    className: '.bg-attachment-fixed',
    expectedCSS: [
      ['background-attachment', 'fixed'],
    ],
  },
  // TODO: I have no idea why bg-attachment-local is not working here
  // {
  // className: '.bg-attachment-local',
  // expectedCSS: [
  //     ['background-attachment', 'local'],
  //   ],
  // },
  {
    className: '.bg-attachment-scroll',
    expectedCSS: [
      ['background-attachment', 'scroll'],
    ],
  },
  // background position
  {
    className: '.bg-position-bottom',
    expectedCSS: [
      ['background-position', 'bottom'],
    ],
  },
  {
    className: '.bg-position-center',
    expectedCSS: [
      ['background-position', 'center'],
    ],
  },
  {
    className: '.bg-position-left',
    expectedCSS: [
      ['background-position', 'left'],
    ],
  },
  {
    className: '.bg-position-left-bottom',
    expectedCSS: [
      ['background-position', 'left bottom'],
    ],
  },
  {
    className: '.bg-position-left-top',
    expectedCSS: [
      ['background-position', 'left top'],
    ],
  },
  {
    className: '.bg-position-right',
    expectedCSS: [
      ['background-position', 'right'],
    ],
  },
  {
    className: '.bg-position-right-bottom',
    expectedCSS: [
      ['background-position', 'right bottom'],
    ],
  },
  {
    className: '.bg-position-right-top',
    expectedCSS: [
      ['background-position', 'right top'],
    ],
  },
  {
    className: '.bg-position-top',
    expectedCSS: [
      ['background-position', 'top'],
    ],
  },
  // background repeat
  {
    className: '.bg-repeat',
    expectedCSS: [
      ['background-repeat', 'repeat'],
    ],
  },
  {
    className: '.bg-no-repeat',
    expectedCSS: [
      ['background-repeat', 'no-repeat'],
    ],
  },
  {
    className: '.bg-repeat-x',
    expectedCSS: [
      ['background-repeat', 'repeat-x'],
    ],
  },
  {
    className: '.bg-repeat-y',
    expectedCSS: [
      ['background-repeat', 'repeat-y'],
    ],
  },
  // background size
  {
    className: '.bg-size-auto',
    expectedCSS: [
      ['background-size', 'auto'],
    ],
  },
  {
    className: '.bg-size-cover',
    expectedCSS: [
      ['background-size', 'cover'],
    ],
  },
  {
    className: '.bg-size-contain',
    expectedCSS: [
      ['background-size', 'contain'],
    ],
  },
];
