import mongoose from "mongoose"
import app from "./app"
import dbUrl from "./config/index"
const PORT = process.env.PORT || 4000

async function main() {
    
    try {
        // await mongoose.connect(dbUrl.dbUrl as string,{dbName:"rokto-khuji"})
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Error starting server:", error)
    }
}


main()