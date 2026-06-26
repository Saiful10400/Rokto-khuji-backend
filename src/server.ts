import mongoose from "mongoose"
import app from "./app"
import config from "./config/index"
 

async function main() {
    
    try {
        await mongoose.connect(config.dbUrl as string,{dbName:"rokto-khuji"})
        app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}`)
        })
    } catch (error) {
        console.error("Error starting server:", error)
    }
}


main()