import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const route = Router();

route.post("/", zapController);

route.get("/", getZapController);
route.get("/:zapId", authMiddleware);

export const zapRouter = route;
