const UserModel = require('../models/user.model')

const UserController = {}

UserController.createNewUser = (req, res, next) => {
  console.log("res", res.json)
  return UserModel.createNew(req.body.userObj).then(result => {
    console.log("controller", result)
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

module.exports = UserController