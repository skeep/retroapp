module.exports = {
  'Retroapp Functionality' : function (browser) {
    browser
      .url('http://localhost:300')
      .waitForElementVisible('body', 1000)
      .assert.title('React App')
      .end();
  }
};