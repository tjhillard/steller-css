// global
const fs = require('fs');
const path = require('path');
const getElementComputedStylesByClassName = require('../utils/getElementComputedStylesByClassName');
const injectStellerCSSDistFile = require('../utils/injectStellerCSSDistFile');

// module specific
const css = fs.readFileSync(path.resolve(__dirname, '../index.css'), 'utf8');
const html = fs.readFileSync(path.resolve(__dirname, './svg.html'), 'utf8');
const classesWithExpectedStyles = require('./svg.classes');

jest.dontMock('fs');

describe(`${path.basename(__filename).split('.test.js')[0]}`, () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    injectStellerCSSDistFile(document, css);
  });

  classesWithExpectedStyles.forEach((_class) => {
    _class.expectedCSS.forEach((expectedStyleObj) => {
      it(`[${_class.className}] adds ${expectedStyleObj[0]} with value of ${expectedStyleObj[1]}`, () => {
        expect(
          getElementComputedStylesByClassName(_class.className)[expectedStyleObj[0]],
        ).toBe(expectedStyleObj[1]);
      });
    });
  });
});
