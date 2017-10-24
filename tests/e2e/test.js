module.exports = {
  'Retroapp Functionality' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#brand', 'Welcome to the Future')
      .end();
  }
};