var SnackModel = require('../models/snack.model')

const SnackController = {}

SnackController.createNewSnack = (req,  res, next) => {
  return SnackModel.createNew().then(result => {
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

module.exports = SnackController