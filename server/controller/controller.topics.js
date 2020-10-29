const Topics = require('../model/topicsSchema');

exports.listAllTopics = async (req, res) => {
  const topks = await Topics.find();
  res.send(topks);
};

exports.createTopic = async (req, res) => {
  const { title } = req.body;
  if (title || title.length < 1) {
    try {
      let outcome = await Topics.create({ title: title });
      res.status(201).send(outcome);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  } else res.status(500).send('Invalid empty string topic');
};

exports.deleteTopic = async (req, res) => {
  try {
    console.log('Received Request:',req.params);
    await Topics.deleteOne({_id:req.params.id})
    console.log('sending back status');
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.vote = async (req, res) => {
  try {
    const {id,dir} = req.params;
    let outcome = await Topics
      .findByIdAndUpdate({_id:id},{$inc: {score:dir} },{new: true});
    res.send(outcome);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
