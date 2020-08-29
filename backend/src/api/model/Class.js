const { Schema, model } = require("@config")

const classSchema = new Schema({
    name: {
        type:String,
        required:true
    }, 
    color: {
        type:String, 
        required:false,
        default: "#0a0a0a"
    }
}, {
    collection: "class"
})


module.exports = model("Class", classSchema)