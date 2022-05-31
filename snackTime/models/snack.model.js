const SnackModel = require('../schemas/snack.schema')

SnackModel.createNew = function(snackObject) {
  const newSnack = new SnackModel({
    snack: snackObject.snack,
    store: snackObject.store,
    savory: snackObject.savory,
    sweet: snackObject.sweet,
    requiresPrep: snackObject.prep,
    prepTime:snackObject.time,
    temperature: snackObject.temperature,
    ingredients: snackObject.ingredients,
    tags: snackObject.tags
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

SnackModel.getByIngredient = function(ingredients) {
  return SnackModel.find({ingredients: {$all: [ingredients]}}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.getByNotHot = function(temp) {
  return SnackModel.find({temperature: {$in: ['warm', 'cold']}}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.getByTags = function(tags) {
  return SnackModel.find({tags: {$in: tags}}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

module.exports = SnackModel