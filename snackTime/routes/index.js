var express = require('express');
var router = express.Router();
var SnackController = require('../controllers/snack.controller')

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/snack', SnackController.getAllSnacks)
router.get('/snack/type/:snackType', SnackController.getSnackByType)

/* POST */
router.post('/snack/new', SnackController.createNewSnack)


module.exports = router;
