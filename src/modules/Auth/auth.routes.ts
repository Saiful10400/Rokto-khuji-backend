import { Router } from "express";
import authController from "./auth.controller";

const route=Router()

// create user
route.post("/create-user",authController.createUser)




const authRoutes=route
export default authRoutes