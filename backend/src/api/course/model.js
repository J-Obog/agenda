const { Schema, model } = require("../config")

const courseSchema = new Schema({
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
    collection: "course"
})


module.exports = model("Course", courseSchema)