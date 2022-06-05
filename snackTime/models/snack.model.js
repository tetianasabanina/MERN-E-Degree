const SnackModel = require("../schemas/snack.schema");

/* Create */
SnackModel.createNew = function (snackObject) {
	const newSnack = new SnackModel({
		snack: snackObject.snack,
		store: snackObject.store,
		savory: snackObject.savory,
		sweet: snackObject.sweet,
		requiresPrep: snackObject.prep,
		prepTime: snackObject.time,
		temperature: snackObject.temperature,
		ingredients: snackObject.ingredients,
		tags: snackObject.tags,
	});

	return newSnack
		.save()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

/* Retrieve */
SnackModel.getById = function(id) {
  return SnackModel.findById(id).exec().then(result => {
    return result
  }).catch(error => { return error})
}

SnackModel.getAll = function () {
	return SnackModel.find({})
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

SnackModel.getByType = function (snackType) {
	return SnackModel.find({ snack: snackType })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

SnackModel.getByIngredient = function (ingredients, includes) {
	console.log(typeof includes);
	if (includes === "true") {
		return SnackModel.find({ ingredients: { $all: ingredients } })
			.exec()
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	} else if (includes === "false") {
		return SnackModel.find({ ingredients: { $nin: ingredients } })
			.exec()
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	}
};

SnackModel.getByNotHot = function (temp) {
	return SnackModel.find({ temperature: { $in: ["warm", "cold"] } })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

SnackModel.getByTags = function (tags) {
	return SnackModel.find({ tags: { $in: tags } })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

SnackModel.getByPrepRange = function (range) {
	if (range.low && range.high) {
		return SnackModel.find({ prepTime: { $gt: range.low, $lt: range.high } })
			.exec()
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	} else if (range.low && !range.high) {
		return SnackModel.find({ prepTime: { $gt: range.low } })
			.exec()
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	} else if (range.high && !range.low) {
		return SnackModel.find({ prepTime: { $lt: range.high } })
			.exec()
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	}
};

/* Update */
SnackModel.updateSnackProperty = function(id, value) {
  return SnackModel.updateOne(
    {_id: id},
    {$set: value}
  ).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}
SnackModel.updateIngredients = function(id, ingredients, operation) {
  switch (operation) {
    case 'add':
      return SnackModel.updateMany(
        {_id: id },
        { $addToSet: { ingredients: ingredients.new }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
    case 'update':
      return SnackModel.updateMany(
        {_id: id, ingredients: ingredients.current },
        { $set: { 'ingredients.$': ingredients.new }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
    case 'remove':
      return SnackModel.updateMany(
        {_id: id },
        { $pull: { ingredients: ingredients.current }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
  }
};

module.exports = SnackModel;
