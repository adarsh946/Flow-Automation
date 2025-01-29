import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization as unknown as string;

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD);

    if (!decoded) {
      res.status(403).json({
        message: "not verified",
      });

      // @ts-ignore
      req.id = decoded.id;
      next();
    }
  } catch (error) {
    res.status(403).json({
      message: "you are not logged in",
    });
  }
};
