import express from "express";
import cors from "cors";
import { userRouter } from "../routes/user-router.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();
web.use(cors());
web.use(express.json());
web.use(userRouter);
web.use(errorMiddleware);
