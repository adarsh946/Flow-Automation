import express from "express";
import cors from "cors";
import { authRouter } from "./routes/user.routes";
import { zapRouter } from "./routes/zap.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", authRouter);

app.use("/api/v1/zaps", zapRouter);

app.listen(3000);
