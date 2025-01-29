import client from "@repo/db";
import { signinSchema, signupSchema } from "../types/type";
import bcrypt from "bcryptjs";

export const signupController = async (req: Request, res: any) => {
  try {
    const parsedData = signupSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(403).json({
        message: "Unable to parse data",
      });
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    const signup = await client.user.create({
      data: {
        name: parsedData.data.name,
        eamil: parsedData.data.email,
        password: hashedPassword,
      },
    });

    if (!signup) {
      return res.status(403).json({
        message: "unable to signup",
      });
    }

    res.status(200).json({
      message: "signed successfully",
      name: signup.name,
      email: signup.eamil,
    });
  } catch (error) {
    res.status(403).json({
      message: "unable to signup!!",
    });
  }
};

const signinController = async (req: Request, res: any) => {
  const pasrsedData = signinSchema.safeParse(req.body);
  if (!pasrsedData.success) {
    return res.status(403).josn({
      message: "unable to parse data",
    });
  }
};
