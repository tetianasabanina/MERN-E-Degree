const UserModel = require("../schemas/user.schema");

/* Create */
UserModel.createNew = function(userObj) {
  const newUser = new UserModel({
    name: userObj.name,
    userName: userObj.userName,
    email: userObj.email
  })
  return newUser.save().then(result => {
    // console.log("model", result)
    return result
  }).catch(error => {
    return error
  })
}

/* Retrieve */
UserModel.getAll = function () {
	return UserModel.find({})
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

module.exports = UserModel