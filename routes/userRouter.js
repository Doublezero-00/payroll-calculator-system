import express from "express";
import { Signup, Login } from "../controllers/userController.js";
import { signupValidator, loginValidator } from "../validator/auth.js";
import Validate from "../validator/validate.js";

const userRouter = express.Router();

userRouter.post("/signup", signupValidator, Validate, Signup);
userRouter.post("/login", loginValidator, Validate, Login);

export default userRouter;
