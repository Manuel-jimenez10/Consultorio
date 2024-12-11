import { Router } from "express";
import { getAllUsers, getUserById, userLogin, userRegister } from "../controller/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/register", userRegister);

usersRouter.post("/login", userLogin);

export default usersRouter;