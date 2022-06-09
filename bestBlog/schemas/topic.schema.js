const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const TopicSchema = new Schema(
	{
		topicName: String,
    text: String,
    private: Boolean,
    tags: [String],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },  
	{
		timestamps: true,
	}
);

const TopicModel = mongoose.model("Topic", TopicSchema);

module.exports = TopicModel;