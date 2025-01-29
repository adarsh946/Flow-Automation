import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  getIndividualZapController,
  getZapController,
  zapController,
} from "../controllers/zap.controllers";

const route = Router();

route.post("/", authMiddleware, zapController);

route.get("/", authMiddleware, getZapController);
route.get("/:zapId", authMiddleware, getIndividualZapController);

export const zapRouter = route;
