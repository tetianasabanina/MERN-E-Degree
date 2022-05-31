const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const SnackSchema = new Schema(
	{
		snack: {
      type: String,
      validate: {
        validator: value => !/s$/.test(value),
        message: property => `${property.value} should not be plural.`
      }
    },
    prepTime: {
      type: Number,
      default: 15,
      min: 0,
      max: 30
    },
		store: Boolean,
		requiresPrep: Boolean,
		savory: Boolean,
		sweet: {
			type: Boolean,
      required: function() {return this.snack === 'banana'}
      // required: [true, 'Error: sweet property is required']
		},
    temperature: {
      type: String,
      enum: ['hot', 'cold']
    }
	},
	{
		timestamps: true,
	}
);

const SnackModel = mongoose.model("Snack", SnackSchema);

module.exports = SnackModel;
