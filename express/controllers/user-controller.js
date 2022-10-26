const { kafka } = require("../config");

const topic = 'get_orders';

const getUsers = async (req, res) => {
  const messagesCount = 2450;

  for (let i = 0; i < messagesCount; i++) {
    await kafka.producer.send({
      topic,
      messages: [{ value: 'Get all users' }]
    });
  }

  res.json(':)')
};


module.exports = {
  getUsers,
};
