var TopicModel = require('../models/topic.model')

const TopicController = {}

/* Insert */
TopicController.createNewTopic = (req, res, next) => {
  return TopicModel.createNew(req.body.topicObject).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}


/* Retrieve */
TopicController.getTopicById = (req,  res, next) => {
  const id = req.params.id
  return TopicModel.getById(id).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

TopicController.getAllTopics = (req,  res, next) => {
  return TopicModel.getAll().then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

TopicController.getTopicByName = (req,  res, next) => {
  const topicName = req.params.topicName
  return TopicModel.getByName(topicName).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

TopicController.getTopicByAccessType = (req, res, next) => {
  const type = req.params.type
  return TopicModel.getByAccessType(type).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

TopicController.getTopicByTags = (req,res, next) =>{
  const tags = req.query.tags
  const tagsArray = tags.split(' ')
  console.log(tagsArray)
  return TopicModel.getByTags(tagsArray).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

/* Update */
TopicController.updateTopicProperty = (req, res, next) => {
  const id=req.body.id
  const value = req.body.update
  return TopicModel.updateTopicProperty(id, value). then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  })
}

TopicController.updateTopicTags = (req, res, next) => {
  return TopicModel.updateTags(req.body.id, req.body.tags, req.body.operation).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(error)
  }) 
}

/* Remove */
TopicController.removeTopic = (req, res, next) => {
  const id = req.params.id
  return TopicModel.removeTopic(id).then(result => {
    return res.json(result)
  }).catch(error => {
    return res.json(result)
  })
}

module.exports = TopicController