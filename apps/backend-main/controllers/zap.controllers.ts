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

  try {
    const zap = await client.zap.create({
      data: {
        userId: id,
        trigger: {
          create: {
            triggerId: parsedData.data.trigger,
          },
        },
        action: {
          create: parsedData.data.action.map((x, index) => ({
            actionId: x.availableActionId,
            sortingOrder: index,
            metadata: x.actionMetadata,
          })),
        },
      },
    });

    if (!zap) {
      return res.status(403).json({
        message: "unable to create the zap",
      });
    }

    return res.status(200).json({
      zap,
    });
  } catch (error) {
    return res.status(403).json({
      message: "unable to create zap",
    });
  }
};

export async function getZapController({
  req,
  res,
}: {
  req: Request;
  res: any;
}): Promise<any> {
  //@ts-ignore
  const id = req.id;

  try {
    const zaps = await client.zap.findMany({
      where: {
        userId: id,
      },
      include: {
        action: {
          include: {
            type: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });

    if (!zaps) {
      return res.status(403).josn({
        message: "unable to find zaps",
      });
    }

    return res.status(200).json({
      zaps,
    });
  } catch (e) {
    return res.status(403).json({
      message: "unable to find zaps !!",
    });
  }
}

export const getIndividualZapController = async (req: any, res: any) => {
  //@ts-ignore
  const id = req.id;
  const zapId = req.params.zapId;

  try {
    const zap = await client.zap.findFirst({
      where: {
        userId: id,
        id: zapId,
      },
      include: {
        trigger: {
          include: {
            type: true,
          },
        },
        action: {
          include: {
            type: true,
          },
        },
      },
    });

    if (!zap) {
      return res.status(403).json({
        message: "unable to find zaps for this zapId",
      });
    }

    return res.status(200).json({
      zap,
    });
  } catch (error) {
    return res.status(403).json({
      message: "unable to find zaps for this zapId !!",
    });
  }
};
