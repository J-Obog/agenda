require("./alias")
require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT

app.use(express.json())
app.use(cors()) 
app.use("/api", require("./api"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})