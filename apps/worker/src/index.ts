import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "unique-id",
  brokers: ["localhost:9092"],
});

const TOPIC_NAME = "zap-events";
const consumer = kafka.consumer({ groupId: "group-1" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString(),
      });
      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition: partition,
          offset: parseInt(message.offset + 1).toString(),
        },
      ]);
    },
  });
};
