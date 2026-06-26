import { Router } from "express";
import authController from "./auth.controller";

const route=Router()

// create user
route.post("/create-user",authController.createUser)

// get user (single,all user included)
route.get("/get-user",authController.getuser)




const authRoutes=route
export default authRoutes