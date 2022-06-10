var SnackModel = require('../models/snack.model')

const SnackController = {}

/* Insert */
SnackController.createNewSnack = (req, res, next) => {
  return SnackModel.createNew(req.body.snackObject).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}


/* Retrieve */
SnackController.getSnackById = (req,  res, next) => {
  const id = req.params.id
  return SnackModel.getById(id).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

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
  const includes = req.query.includes
  console.log(ingredientArray)
  return SnackModel.getByIngredient(ingredientArray, includes).then(result => {
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

SnackController.getSnackByTags = (req,res, next) =>{
  const tags = req.query.tags
  const tagsArray = tags.split(' ')
  console.log(tagsArray)
  return SnackModel.getByTags(tagsArray).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

SnackController.getSnackByPrep = (req,res, next) =>{
  const lowRange = req.query.lowRange
  const highRange = req.query.highRange
  const rangeObject = {low: parseInt(lowRange), high: parseInt(highRange)}
  return SnackModel.getByPrepRange(rangeObject).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

/* Update */
SnackController.updateSnackProperty = (req, res, next) => {
  const id=req.body.id
  const value = req.body.update
  return SnackModel.updateSnackProperty(id, value). then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}
SnackController.updateSnackIngredients = (req, res, next) => {
  return SnackModel.updateIngredients(req.body.id, req.body.ingredients, req.body.operation).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  }) 
}

/* Remove */
SnackController.removeSnack = (req, res, next) => {
  const id = req.params.id
  return SnackModel.removeSnack(id).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(result)
  })
}

module.exports = SnackController