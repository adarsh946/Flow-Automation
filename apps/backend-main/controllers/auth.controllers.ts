import client from "@repo/db";
import { signinSchema, signupSchema } from "../types/type";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";
import { Request, request, Response } from "express";

export const signupController = async (req: Request, res: any) => {
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(403).json({
      message: "Unable to parse data",
    });
  }

  try {
    const userExists = await client.user.findFirst({
      where: {
        eamil: parsedData.data.email,
      },
    });

    if (userExists) {
      return res.status(403).json({
        message: "user already exists!",
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

    //  verify by sending email
  } catch (error) {
    res.status(403).json({
      message: "unable to signup!!",
    });
  }
};

export const signinController = async (req: Request, res: any) => {
  const pasrsedData = signinSchema.safeParse(req.body);
  if (!pasrsedData.success) {
    return res.status(403).josn({
      message: "unable to parse data",
    });
  }

  try {
    const user = await client.user.findUnique({
      where: {
        eamil: pasrsedData.data.email,
      },
    });

    if (!user) {
      return res.status(403).josn({
        message: "user not found",
      });
    }

    const hashedPassword = await bcrypt.compare(
      user?.password,
      pasrsedData.data.password
    );
    if (!hashedPassword) {
      return res.status(403).json({
        message: "password do not match",
      });
    }

    const signin = await client.user.findFirst({
      where: {
        eamil: user.eamil,
        password: pasrsedData.data.password,
      },
    });

    if (!signin) {
      return res.status(403).josn({
        message: "unable to signin",
      });
    }

    const token = jwt.sign(
      {
        id: signin.id,
      },
      JWT_PASSWORD
    );

    res.status(200).json({
      message: "sigin successfull",
      token,
    });
  } catch (error) {
    res.status(403).json({
      message: "unable to sigin the user!!",
    });
  }
};

export const getUserController = async (req: Request, res: any) => {
  //@ts-ignore
  const id = req.id;
  try {
    const user = client.user.findFirst({
      where: {
        id: id,
      },
      select: {
        name: true,
        eamil: true,
      },
    });

    if (!user) {
      return res.status(403).json({
        message: "user not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(403).json({
      message: "user not found",
    });
  }
};
