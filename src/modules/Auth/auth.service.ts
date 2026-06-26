


import authModel from "./auth.model";
import { authType } from "./auth.types";

// 1. create a user
const createUser = async (userData: authType) => {
    const result = await authModel.create(userData)
    return result
}



const authService={createUser}
export default authService