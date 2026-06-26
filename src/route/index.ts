import { Router } from "express";
import authRoutes from "../modules/Auth/auth.routes";

const routes=Router()

const moduleRoutes=[
    {
        path:"/auth",
        route: authRoutes
    }
]

moduleRoutes.forEach(item=>routes.use(item.path,item.route))


export default routes