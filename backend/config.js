const mongoose = require("mongoose")
const dbUrl = process.env.MONGOURL 

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    autoIndex: false
}

mongoose.connect(dbUrl, options)
.then(() => {
    console.log("DB Connected")
})
.catch(e => {
    console.error(e)
}) 

module.exports = mongoose