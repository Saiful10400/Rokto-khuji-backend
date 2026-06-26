


import authModel from "./auth.model";
import { authType } from "./auth.types";

// 1. create a user
const createUser = async (userData: authType) => {

    // blood donation eligibility check logic.
    const lastDonationDate = new Date(userData.last_donation_date)
    lastDonationDate.setMonth(lastDonationDate.getMonth() + 3)
    const TodayDate = new Date()
    const ElegableToDonate = TodayDate >= lastDonationDate


    const result = await authModel.create({ ...userData, status: ElegableToDonate ? "Available" : "Unavailable" })
    return result
}



const authService = { createUser } 
export default authService