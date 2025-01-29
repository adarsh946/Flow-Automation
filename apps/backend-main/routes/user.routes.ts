import { Router } from "express";

const route = Router();

route.post("/signup", signupController);
route.post("/signin", signinController);

route.get("/user", getUserController);

export const authRouter = route;
