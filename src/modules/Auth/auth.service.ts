


import authModel from "./auth.model";
import { authType } from "./auth.types";

// 1. create a user
const createUser = async (userData: authType) => {

    // blood donation eligibility check logic.
    const lastDonationDate = new Date(userData.last_donation_date)
    lastDonationDate.setMonth(lastDonationDate.getMonth() + 3)
    const TodayDate = new Date()
    let ElegableToDonate = TodayDate >= lastDonationDate
    if (userData.last_donation_date === undefined) ElegableToDonate = true


    const result = await authModel.create({ ...userData, status: ElegableToDonate ? "Available" : "Unavailable" })
    return result
}

// 2. get user (single user, all user)
const getUser = async (id?: string, page?: number, limit?: number) => {
    let result;
    if (id) {
        result = await authModel.findById(id)
    } else if (page && limit) {
        result = await authModel.find({ isBlocked: false }).skip((page - 1) * limit).limit(limit)
    } else {
        result = await authModel.find({ isBlocked: false })
    }
    return result
}


const authService = { createUser, getUser }
export default authService