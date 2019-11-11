exports.config = {
  tests: './e2e_test/*_test.js',
  output: './e2e_test/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
    },
  },
  include: {
    I: './e2e_test/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'jummer',
};
