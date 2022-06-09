const TopicModel = require("../schemas/topic.schema");

/* Create */
TopicModel.createNew = function (topicObject) {
	const newTopic = new TopicModel({
		topicName: topicObject.topic,
		text: topicObject.text,
    private: topicObject.private,
    tags: topicObject.tags,
    createdBy: topicObject.user
	});

	return newTopic
		.save()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

/* Retrieve */
TopicModel.getById = function(id) {
  return TopicModel.findById(id)
  .populate({path: 'createdBy', select: 'email'}).exec().then(result => {
    return result
  }).catch(error => { return error})
}

TopicModel.getAll = function () {
	return TopicModel.find({})
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

TopicModel.getByType = function (topicType) {
	return TopicModel.find({ topicName: topicType })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

TopicModel.getByNotPrivate = function (temp) {
	return TopicModel.find({ private: false })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

TopicModel.getByTags = function (tags) {
	return TopicModel.find({ tags: { $in: tags } })
		.exec()
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
};

/* Update */
TopicModel.updateTopicProperty = function(id, value) {
  return TopicModel.updateOne(
    {_id: id},
    {$set: value}
  ).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}
TopicModel.updateTags = function(id, tags, operation) {
  switch (operation) {
    case 'add':
      return TopicModel.updateMany(
        {_id: id },
        { $addToSet: { tags: tags.new }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
    case 'update':
      return TopicModel.updateMany(
        {_id: id, tags: tags.current },
        { $set: { 'tags.$': tags.new }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
    case 'remove':
      return TopicModel.updateMany(
        {_id: id },
        { $pull: { tags: tags.current }},
        { new: true }
      ).exec().then(result => {
        return result
      }).catch(error => {
        return error
      });
  }
};

/* Remove */
TopicModel.removeTopic = function(id) {
  return TopicModel.findByIdAndRemove(id).exec().then(result => {
    return result
  }).catch(error => {
    return error
  })
}

module.exports = TopicModel;
