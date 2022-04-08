var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/slow', (req, res, next) => {
  console.log('delay for 3 seconds');
  setTimeout(() => {
    let secs = new Date().getTime();
    res.send({ currentTime: secs})
    console.log('delay for 3 seconds');
  }, 3000);
});
router.get('/slow2', (req, res, next) => {
  console.log('delay for 3 seconds');
  setTimeout(() => {
    res.send('bobby')
  }, 3000);
});

module.exports = router;
