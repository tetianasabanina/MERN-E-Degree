var express = require('express');
var router = express.Router();
var TopicController = require('../controllers/topic.controller')
var UserController = require('../controllers/user.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog' });
});

/* GET */
router.get('/user', UserController.getAllUsers)
router.get('/topic', TopicController.getAllTopics)
router.get('/topic/name/:topicName', TopicController.getTopicByName)
router.get('/topic/private/:type', TopicController.getTopicByAccessType)
router.get('/topic/tags/', TopicController.getTopicByTags)
router.get('/topic/:id', TopicController.getTopicById)

/* POST */
router.post('/topic/new', TopicController.createNewTopic)
router.post('/user/new', UserController.createNewUser)

/* PUT */
router.put('/topic/tags/', TopicController.updateTopicTags)
router.put('/topic/', TopicController.updateTopicProperty)

/* Delete */
router.delete('/topic/:id', TopicController.removeTopic)

module.exports = router;
