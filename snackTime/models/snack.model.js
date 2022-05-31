const SnackModel = require('../schemas/snack.schema')

SnackModel.createNew = function(snackObject) {
  const newSnack = new SnackModel({
    snack: snackObject.snack,
    store: snackObject.store,
    savory: snackObject.savory,
    sweet: snackObject.sweet,
    requiresPrep: snackObject.requiresPrep,
    prepTime:snackObject.prepTime,
    temperature: snackObject.temperature,
    ingredients: snackObject.ingredients
  })

  return newSnack.save().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.getAll = function() {
  return SnackModel.find({}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.getByType = function(snackType) {
  return SnackModel.find({snack: snackType}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

module.exports = SnackModel