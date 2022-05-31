var SnackModel = require('../models/snack.model')

const SnackController = {}

SnackController.createNewSnack = (req,  res, next) => {
  return SnackModel.createNew(req.body.snackObject).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}


/* Retrieve */
SnackController.getAllSnacks = (req,  res, next) => {
  return SnackModel.getAll().then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

SnackController.getSnackByType = (req,  res, next) => {
  const snackType = req.params.snackType
  return SnackModel.getByType(snackType).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

SnackController.getSnackByIngredients = (req, res, next) => {
  const ingredientList = req.query.list
  const ingredientArray = ingredientList.split(' ')
  console.log(ingredientArray)
  return SnackModel.getByIngredient(ingredientList).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

SnackController.getSnackByNotHot = (req, res, next) => {
  return SnackModel.getByNotHot().then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

module.exports = SnackController