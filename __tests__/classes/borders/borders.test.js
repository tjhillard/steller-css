// global
const fs = require('fs');
const path = require('path');
const getElementComputedStylesByClassName = require('../../__utils__/getElementComputedStylesByClassName');
const injectStellerCSSDistFile = require('../../__utils__/injectStellerCSSDistFile');

// module specific
const css = fs.readFileSync(path.resolve(__dirname, '../../index.css'), 'utf8');
const html = fs.readFileSync(path.resolve(__dirname, './__fixtures__/borders.html'), 'utf8');
const classesWithExpectedStyles = require('./__fixtures__/borders.classes');

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
