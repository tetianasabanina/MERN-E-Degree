var SnackModel = require('../models/snack.model')

const SnackController = {}
SnackController.favoriteSnackController = (req, res, next) => {
  if (req.body.snack === 'pudding') {
    return res.json({ question: 'what flavor?' })
  } else if (req.body.snack === 'popcorn') {
    return res.json({ question: 'cheddar?' })
  } else {
    return res.json({ comment: 'that is not a real snack'})
  }
}

SnackController.ingredientController = (req, res, next) => {
  if (req.body.snack === 'hummus') {
    return res.json({ ingredients: { 1: 'chickpeas', 2: 'tahini'} })
  } else  {
    return res.json({ comment: 'that is not a real snack'})
  }
} 

SnackController.createNewSnack = (req,  res, next) => {
  return SnackModel.Insert().then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}


/* Retrieve */
SnackController.retrieveSnacks = (req,  res, next) => {
  return SnackModel.query().then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

SnackController.querySnack = (req,  res, next) => {
  const snackType = req.params.snackType
  return SnackModel.querySnack(snackType).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

module.exports = SnackController