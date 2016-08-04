var page = require('webpage').create();
page.open('http://www.unixtimestamp.com/', function() {
  page.render('time.png');
  phantom.exit();
});