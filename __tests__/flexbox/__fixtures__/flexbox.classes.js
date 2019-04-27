module.exports = [
  // display
  {
    className: '.flex',
    expectedCSS: [
      ['display', 'flex'],
    ],
  },
  {
    className: '.inline-flex',
    expectedCSS: [
      ['display', 'inline-flex'],
    ],
  },
  // direction
  {
    className: '.flex-row',
    expectedCSS: [
      ['flex-direction', 'row'],
    ],
  },
  {
    className: '.flex-row-reverse',
    expectedCSS: [
      ['flex-direction', 'row-reverse'],
    ],
  },
  {
    className: '.flex-col',
    expectedCSS: [
      ['flex-direction', 'column'],
    ],
  },
  {
    className: '.flex-col-reverse',
    expectedCSS: [
      ['flex-direction', 'column-reverse'],
    ],
  },
  // wrap
  {
    className: '.flex-wrap',
    expectedCSS: [
      ['flex-wrap', 'wrap'],
    ],
  },
  {
    className: '.flex-no-wrap',
    expectedCSS: [
      ['flex-wrap', 'nowrap'],
    ],
  },
  {
    className: '.flex-wrap-reverse',
    expectedCSS: [
      ['flex-wrap', 'wrap-reverse'],
    ],
  },
  // align items
  {
    className: '.items-stretch',
    expectedCSS: [
      ['align-items', 'stretch'],
    ],
  },
  {
    className: '.items-start',
    expectedCSS: [
      ['align-items', 'flex-start'],
    ],
  },
  {
    className: '.items-center',
    expectedCSS: [
      ['align-items', 'center'],
    ],
  },
  {
    className: '.items-end',
    expectedCSS: [
      ['align-items', 'flex-end'],
    ],
  },
  {
    className: '.items-baseline',
    expectedCSS: [
      ['align-items', 'baseline'],
    ],
  },
  // align content
  {
    className: '.content-start',
    expectedCSS: [
      ['align-content', 'flex-start'],
    ],
  },
  {
    className: '.content-center',
    expectedCSS: [
      ['align-content', 'center'],
    ],
  },
  {
    className: '.content-end',
    expectedCSS: [
      ['align-content', 'flex-end'],
    ],
  },
  {
    className: '.content-between',
    expectedCSS: [
      ['align-content', 'space-between'],
    ],
  },
  {
    className: '.content-around',
    expectedCSS: [
      ['align-content', 'space-around'],
    ],
  },
  // align self
  {
    className: '.self-auto',
    expectedCSS: [
      ['align-self', 'auto'],
    ],
  },
  {
    className: '.self-start',
    expectedCSS: [
      ['align-self', 'flex-start'],
    ],
  },
  {
    className: '.self-center',
    expectedCSS: [
      ['align-self', 'center'],
    ],
  },
  {
    className: '.self-end',
    expectedCSS: [
      ['align-self', 'flex-end'],
    ],
  },
  {
    className: '.self-stretch',
    expectedCSS: [
      ['align-self', 'stretch'],
    ],
  },
  // justify content
  {
    className: '.justify-start',
    expectedCSS: [
      ['justify-content', 'flex-start'],
    ],
  },
  {
    className: '.justify-center',
    expectedCSS: [
      ['justify-content', 'center'],
    ],
  },
  {
    className: '.justify-end',
    expectedCSS: [
      ['justify-content', 'flex-end'],
    ],
  },
  {
    className: '.justify-between',
    expectedCSS: [
      ['justify-content', 'space-between'],
    ],
  },
  {
    className: '.justify-around',
    expectedCSS: [
      ['justify-content', 'space-around'],
    ],
  },
  // grow & shrink
  {
    className: '.flex-initial',
    expectedCSS: [
      ['flex', '0 1 auto'],
    ],
  },
  {
    className: '.flex-1',
    expectedCSS: [
      ['flex', '1'],
    ],
  },
  {
    className: '.flex-2',
    expectedCSS: [
      ['flex', '2'],
    ],
  },
  {
    className: '.flex-auto',
    expectedCSS: [
      ['flex', 'auto'],
    ],
  },
  {
    className: '.flex-none',
    expectedCSS: [
      ['flex', '0 0 auto'],
    ],
  },
  {
    className: '.flex-grow',
    expectedCSS: [
      ['flex-grow', '1'],
    ],
  },
  {
    className: '.flex-shrink',
    expectedCSS: [
      ['flex-shrink', '1'],
    ],
  },
  {
    className: '.flex-no-grow',
    expectedCSS: [
      ['flex-grow', '0'],
    ],
  },
  {
    className: '.flex-no-shrink',
    expectedCSS: [
      ['flex-shrink', '0'],
    ],
  },
];
