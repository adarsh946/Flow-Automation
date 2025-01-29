import { Router } from "express";
import {
  signinController,
  signupController,
} from "../controllers/auth.controllers";

const route = Router();

route.post("/signup", signupController);
route.post("/signin", signinController);

route.get("/user", getUserController);

export const authRouter = route;
