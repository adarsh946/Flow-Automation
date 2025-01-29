import { Router } from "express";

const route = Router();

route.post("/", zapController);

route.get("/", getZapContrller);

export const zapRouter = route;
