import client from "@repo/db";
import { zapCreateSchema } from "../types/type";

export const zapController = async (req: Request, res: any) => {
  const parsedData = zapCreateSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(403).json({
      message: "invalid inputs",
    });
  }

  //@ts-ignore
  const id = req.id;

  const zapId = await client.$transaction(async (tx) => {
    const zap = await tx.zap.create({
      data: {
        userId: id,
        trigger: "",
        action: {
          create: parsedData.data.action.map((x, index) => ({
            actionId: x.availableActionId,
            sortingOrder: index,
            metadata: x.actionMetadata,
          })),
        },
      },
    });

    const trigger = await tx.trigger.create({
      data: {
        triggerId: parsedData.data.trigger,
        zapId: zap.id,
      },
    });

    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        trigger: trigger.id,
      },
    });
  });
};
