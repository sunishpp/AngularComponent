const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/TestElement/runtime.js',
    './dist/TestElement/polyfills.js',
    './dist/TestElement/scripts.js',
    './dist/TestElement/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/user-element.js');
})();