// global
const fs = require('fs');
const path = require('path');
const getElementComputedStylesByClassName = require('../utils/getElementComputedStylesByClassName');
const injectStellerCSSDistFile = require('../utils/injectStellerCSSDistFile');

// module specific
const html = fs.readFileSync(path.resolve(__dirname, './backgrounds.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../index.css'), 'utf8');
const classesWithExpectedStyles = require('./backgrounds.classes');

jest.dontMock('fs');

describe('backgrounds', () => {
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
