const router = require('express').Router();
const controller = require('./controller/controller.topics');

router.get('/topics',controller.listAllTopics);
router.post('/topics',controller.createTopic);
router.delete('/topics/:id',controller.deleteTopic);
router.put('/topics/:id/:dir',controller.vote);

module.exports = {
  router,
}