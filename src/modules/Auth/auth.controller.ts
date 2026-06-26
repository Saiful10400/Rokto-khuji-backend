import { Request, Response } from "express";
import catchAsync from "../../utility/catchAsync";
import authService from "./auth.service";
import sendResponse from "../../utility/sendResponse";

// 1. create a user.
const createUser=catchAsync(async(req:Request,res:Response)=>{
    const data=await authService.createUser(req.body);
    sendResponse(res,{
        data,
        success:true,
        statusCode:200,
        message: "User created successfully."
    })
})





const authController={
    createUser
}

export default authController