import client from "@repo/db";
import express from "express";

const app = express();
app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const body = req.body;

  await client.$transaction(async (tx) => {
    const zapRun = await tx.zapRun.create({
      data: {
        zapId: zapId,
        metadata: body,
      },
    });

    await tx.zapRunOutBox.create({
      data: {
        zapRunId: zapRun.id,
      },
    });
  });

  res.json("webhook recieved");
});

app.listen(3001);
