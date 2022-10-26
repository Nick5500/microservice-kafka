const { Kafka, Partitioners, logLevel } = require('kafkajs')

// This is a broker - a single Kafka instance
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR
})

// Producer is an api-gateway that writes data to one or more Kafka topics
const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
})

const consumer = kafka.consumer({
  groupId: 'test-group',
})


async function run() {
  try {
    await producer.connect()
    await consumer.connect()
  } catch (e) {
    kafka.logger().error(e.message)
  }
}

run()

module.exports = {
  producer,
  consumer
};
