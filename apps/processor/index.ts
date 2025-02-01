import { Kafka } from "kafkajs";
import client from "@repo/db";

const TOPIC_NAME = "zap-events";
const kafka = new Kafka({
  clientId: "unique-id",
  brokers: ["localhost:9092"],
});

const main = async () => {
  const producer = kafka.producer();
  await producer.connect();

  while (1) {
    const pendingTasks = await client.zapRunOutBox.findMany({
      where: {},
      take: 10,
    });

    console.log(pendingTasks);

    await producer.send({
      topic: TOPIC_NAME,
      messages: pendingTasks.map((r) => {
        return {
          value: JSON.stringify({ zapRunId: r.zapRunId, stage: 0 }),
        };
      }),
    });

    await client.zapRunOutBox.deleteMany({
      where: {
        id: {
          in: pendingTasks.map((x) => x.id),
        },
      },
    });

    await new Promise((r) => setTimeout(r, 3000));
  }
};

main();
