const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const UserSchema = new Schema({
		name: String,
    userName: String,
    email:String
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;