import express from "express";
import userController from "../controller/user-controller.js";

const userRouter = new express.Router();

userRouter.get("/users", userController.getUser);
userRouter.get("/users/:id", userController.getUserId);
userRouter.post("/users/", userController.post);
userRouter.patch("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.remove);

export { userRouter };
