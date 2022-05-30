const SnackModel = require('../schemas/snack.schema')

SnackModel.Insert = function() {
  const newSnack = new SnackModel({
    snack: 'Cupcake',
    store: true,
    savory: false,
    sweet: true,
    requiresPrep: true,
    prepTime:16
  })

  return newSnack.save().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.query = function() {
  return SnackModel.find({}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

SnackModel.querySnack = function(snackType) {
  return SnackModel.find({snack: snackType}).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

module.exports = SnackModel