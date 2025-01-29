import { Router } from "express";
import {
  signinController,
  signupController,
} from "../controllers/auth.controllers";
import { authMiddleware } from "../middleware/auth.middleware";

const route = Router();

route.post("/signup", signupController);
route.post("/signin", signinController);

route.get("/user", authMiddleware, getUserController);

export const authRouter = route;
