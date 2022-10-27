const { kafka: { producer } } = require("../config");
const logger = require('pino')();

const topic = 'get_orders';

const getUsers = async (req, res) => {
  const messagesCount = process.env.MESSAGES_COUNT;

  const payloads = [
    {
      topic,
      messages: `Event N#${ (Math.random() * 10).toPrecision(2) }`, partition: 0
    },
  ];

  for (let i = 0; i < messagesCount; i++) {
    producer.send(payloads, (error, data) => {
      logger.info(`Event N#${(Math.random() * 10).toPrecision(2)} has been sent`)
    });
  }
  res.json(':)')
};


module.exports = {
  getUsers,
};
