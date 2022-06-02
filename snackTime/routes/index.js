var express = require('express');
var router = express.Router();
var SnackController = require('../controllers/snack.controller')

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/snack', SnackController.getAllSnacks)
router.get('/snack/type/:snackType', SnackController.getSnackByType)
router.get('/snack/ingredients/', SnackController.getSnackByIngredients)
router.get('/snack/nothot/', SnackController.getSnackByNotHot)
router.get('/snack/tags/', SnackController.getSnackByTags)
router.get('/snack/prep/', SnackController.getSnackByPrep)

/* POST */
router.post('/snack/new', SnackController.createNewSnack)


module.exports = router;
