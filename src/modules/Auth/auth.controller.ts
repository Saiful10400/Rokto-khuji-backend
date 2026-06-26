import { Request, Response } from "express";
import catchAsync from "../../utility/catchAsync";
import authService from "./auth.service";
import sendResponse from "../../utility/sendResponse";

// 1. create a user.
const createUser = catchAsync(async (req: Request, res: Response) => {
    const data = await authService.createUser(req.body);
    sendResponse(res, {
        data,
        success: true,
        statusCode: 200,
        message: "User created successfully."
    })
})


// 2. get user (single user, all user)
const getuser = catchAsync(async (req: Request, res: Response) => {

    // is nan checking fn.
    const isNanCheckingUtils = (value: string): boolean => {
        const intValue = parseInt(value)
        return isNaN(intValue)
    }

    const page = req.query?.page
    const skip = req.query?.skip

    if (page && isNanCheckingUtils(page as string)) throw new Error("unauthorized page number formate.")
    if (page && isNanCheckingUtils(skip as string)) throw new Error("unauthorized skip number formate.")

    const data = await authService.getUser(req.query?.id as string, parseInt(req.query?.page as string), parseInt(req.query?.skip as string))
    sendResponse(res, {
        data,
        success: true,
        statusCode: 200,
        message: Array.isArray(data) ? "All user data retrieved successfully." : "user data retrieved successfully."
    })
})




const authController = {
    createUser,
    getuser
}

export default authController