const kafka = require('kafka-node')

const client = new kafka.KafkaClient({
  kafkaHost: process.env.KAFKA_HOST,
  clientId: process.env.KAFKA_CLIENT_ID,
})

const Producer = kafka.Producer;

const producer = new Producer(client);

module.exports = {
  producer,
};
