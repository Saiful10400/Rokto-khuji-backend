import express from "express"
import type {Request,Response} from "express"
import cors from "cors"
import routes from "./route"


const app =express()
app.use(express.json())
app.use(cors({credentials:true,origin:["http://localhost:3000"]}))
app.use("/api/v1",routes)






// not found ruoute.
app.use((req:Request,res:Response)=>{
    res.status(404).json({message:"Route not found"})
})


export default app