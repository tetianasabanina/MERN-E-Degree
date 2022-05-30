var express = require('express');
var router = express.Router();
var SnackController = require('../controllers/snack.controller')

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/snack', SnackController.retrieveSnacks)
router.get('/snack/type', SnackController.querySnack)

/* POST */
router.post('/snack/favorite', SnackController.favoriteSnackController)
router.post('/snack/ingredients', SnackController.ingredientController)
router.post('/snack/new', SnackController.createNewSnack)


module.exports = router;
