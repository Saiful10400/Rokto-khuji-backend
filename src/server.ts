import app from "./app"

const PORT = process.env.PORT || 4000

async function main() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Error starting server:", error)
    }
}


main()